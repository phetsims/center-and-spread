// Copyright 2022, University of Colorado Boulder

/**
 * Manages creation, dragging, positioning of CardNode instances.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import centerAndSpread from '../../centerAndSpread.js';
import { Node, NodeOptions, Text } from '../../../../scenery/js/imports.js';
import optionize from '../../../../phet-core/js/optionize.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import CASModel from '../model/CASModel.js';
import CASObject from '../model/CASObject.js';
import PhetioGroup from '../../../../tandem/js/PhetioGroup.js';
import ArrowNode from '../../../../scenery-phet/js/ArrowNode.js';
import CardNode from './CardNode.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Range from '../../../../dot/js/Range.js';
import IOType from '../../../../tandem/js/types/IOType.js';
import ReferenceIO from '../../../../tandem/js/types/ReferenceIO.js';
import ArrayIO from '../../../../tandem/js/types/ArrayIO.js';
import CardModel from '../model/CardModel.js';
import Emitter from '../../../../axon/js/Emitter.js';
import Panel from '../../../../sun/js/Panel.js';
import CASConstants from '../CASConstants.js';
import centerAndSpreadStrings from '../../centerAndSpreadStrings.js';
import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import MedianBarsNode from './MedianBarsNode.js';
import { RequiredTandem } from '../../../../tandem/js/PhetioObject.js';
import CASColors from '../CASColors.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import IReadOnlyProperty from '../../../../axon/js/IReadOnlyProperty.js';
import arrayRemove from '../../../../phet-core/js/arrayRemove.js';
import stepTimer from '../../../../axon/js/stepTimer.js';
import Easing from '../../../../twixt/js/Easing.js';
import Animation from '../../../../twixt/js/Animation.js';
import dotRandom from '../../../../dot/js/dotRandom.js';
import AsyncCounter from '../model/AsyncCounter.js';

// constants
const CARD_SPACING = 10;
const getCardPositionX = ( index: number ) => index * ( CardNode.CARD_WIDTH + CARD_SPACING );

type CardNodeContainerSelfOptions = {};
export type CardNodeContainerOptions = CardNodeContainerSelfOptions & NodeOptions & RequiredTandem;

class CardNodeContainer extends Node {
  readonly cardNodeCells: CardNode[];
  readonly cardNodeCellsChangedEmitter: Emitter<[]>;

  private readonly model: CASModel;
  private readonly cardNodeGroup: PhetioGroup<CardNode, [ CardModel ]>;
  private readonly medianBarsNode: MedianBarsNode;
  private readonly dragIndicatorArrowNode: ArrowNode;
  private readonly totalDragDistanceProperty: NumberProperty;
  private readonly hasDraggedCardProperty: IReadOnlyProperty<boolean>;
  private readonly cardLayer: Node;
  private isReadyForCelebration: boolean;

  constructor( model: CASModel, providedOptions: CardNodeContainerOptions ) {

    const options = optionize<CardNodeContainerOptions, CardNodeContainerSelfOptions, NodeOptions>( {
      tandem: Tandem.REQUIRED,
      phetioType: CardNodeContainerIO,
      phetioState: true
    }, providedOptions );

    super( options );

    this.model = model;

    // Each card is associated with one "cell", no two cards can be associated with the same cell.  The leftmost cell is 0.
    // The cells linearly map to locations across the screen.
    this.cardNodeCells = [];

    // Fires if the cardNodeCells may have changed
    this.cardNodeCellsChangedEmitter = new Emitter<[]>();

    // TODO-UX: maybe this should be converted to track distance for individual cards
    // Accumulated card drag distance, for purposes of hiding the drag indicator node
    this.totalDragDistanceProperty = new NumberProperty( 0 );

    // Indicates whether the user has ever dragged a card. It's used to hide the drag indicator arrow after
    // the user dragged a card
    this.hasDraggedCardProperty = new DerivedProperty( [ this.totalDragDistanceProperty ], totalDragDistance => {
      return totalDragDistance > 15;
    } );

    this.cardNodeGroup = new PhetioGroup( ( tandem, cardModel ) => {
      return new CardNode( cardModel, new Vector2( 0, 0 ), () => this.getDragRange(), {
        tandem: tandem
      } );
    }, [ model.cardModelGroup.archetype ], {
      phetioType: PhetioGroup.PhetioGroupIO( Node.NodeIO ),
      tandem: model.includeCards ? options.tandem.createTandem( 'cardNodeGroup' ) : Tandem.OPT_OUT,
      supportsDynamicState: false
    } );

    this.medianBarsNode = new MedianBarsNode( {
      notchDirection: 'up',
      barStyle: 'split'
    } );
    this.addChild( this.medianBarsNode );

    const objectCreatedListener = ( casObject: CASObject ) => {

      // A ball landed OR a value changed
      casObject.valueProperty.link( value => {
        if ( this.model.isSortingDataProperty.value && value !== null ) {

          // TODO: Much of this listener code moved to the CASModel. Should this move there as well?  We could make
          // the model track cardModelCells instead of the view tracking cardNodeCells
          this.sortData();
        }
      } );
    };

    model.objectGroup.forEach( objectCreatedListener );
    model.objectGroup.elementCreatedEmitter.addListener( objectCreatedListener );

    model.cardModelGroup.elementDisposedEmitter.addListener( cardModel => {
      const cardNode = this.getCardNode( cardModel.casObject )!;
      assert && assert( cardNode, 'card node should exist' );

      arrayRemove( this.cardNodeCells, cardNode );

      this.cardNodeGroup.disposeElement( cardNode );
      this.cardNodeCellsChangedEmitter.emit();
    } );

    model.isSortingDataProperty.link( isSortingData => {
      if ( isSortingData ) {
        this.sortData();
      }
    } );

    this.cardLayer = new Node();
    this.addChild( this.cardLayer );

    model.cardModelGroup.elementCreatedEmitter.addListener( cardModel => {

      const cardNode = this.cardNodeGroup.createCorrespondingGroupElement( cardModel.tandem.name, cardModel );
      this.cardLayer.addChild( cardNode );

      // Update the position of all cards (via animation) whenever any card is dragged
      cardNode.positionProperty.link( this.createDragPositionListener( cardNode ) );

      // When a card is dropped, send it to its home cell
      cardNode.dragListener.isPressedProperty.link( isPressed => {
        if ( !isPressed && !phet.joist.sim.isSettingPhetioStateProperty.value ) {
          this.sendToHomeCell( cardNode, true, 0.2, () => {
            if ( this.isReadyForCelebration ) {

              const numberDragging = this.cardNodeCells.filter( cardNode => cardNode.dragListener.isPressed ).length;
              if ( numberDragging === 0 ) {
                this.pickable = false;

                this.startRandomCelebration( () => {

                  this.isReadyForCelebration = false;
                  this.pickable = true;
                } );
              }
            }
          } );
        }
      } );

      // Accumulate drag distance
      cardNode.dragDistanceEmitter.addListener( distance => {
        this.totalDragDistanceProperty.value += distance;
      } );

      let targetIndex = this.cardNodeCells.length;
      if ( this.model.isSortingDataProperty.value ) {
        const newValue = cardNode.casObject.valueProperty.value!;
        const existingLowerCardNodes = this.cardNodeCells.filter( cardNode => cardNode.casObject.valueProperty.value! <= newValue );

        const lowerNeighborCardNode = _.maxBy( existingLowerCardNodes, cardNode => this.cardNodeCells.indexOf( cardNode ) );
        targetIndex = lowerNeighborCardNode ? this.cardNodeCells.indexOf( lowerNeighborCardNode ) + 1 : 0;
      }

      if ( !phet.joist.sim.isSettingPhetioStateProperty.value ) {
        this.cardNodeCells.splice( targetIndex, 0, cardNode );
        this.sendToHomeCell( cardNode, false );

        // Animate all displaced cards
        for ( let i = targetIndex; i < this.cardNodeCells.length; i++ ) {
          this.sendToHomeCell( this.cardNodeCells[ i ] );
        }

        this.cardNodeCellsChangedEmitter.emit();
      }
    } );

    this.dragIndicatorArrowNode = new ArrowNode( 0, 0, 35, 0, {
      headHeight: 8,
      headWidth: 12,
      tailWidth: 5,
      pickable: false,
      doubleHead: true,
      fill: CASColors.dragIndicatorColorProperty,
      stroke: 'black',
      lineWidth: 1,
      tandem: options.tandem.createTandem( 'dragIndicatorArrowNode' )
    } );

    // Add or remove the arrow node child
    const dragIndicatorContainer = new Node();
    this.addChild( dragIndicatorContainer );

    const updateDragIndicator = () => {

      const leftCard = this.cardNodeCells[ 0 ];
      const rightCard = this.cardNodeCells[ 1 ];

      const hasPressedCard = this.hasDraggedCardProperty.value;

      const newChildren = leftCard && rightCard && !hasPressedCard ? [ this.dragIndicatorArrowNode ] : [];

      if ( newChildren.length !== dragIndicatorContainer.children.length ) {
        dragIndicatorContainer.children = newChildren;

        if ( leftCard && rightCard ) {
          this.dragIndicatorArrowNode.centerBottom = leftCard.bounds.centerTop.plusXY( 0, -8 );
        }
      }
    };
    this.cardNodeCellsChangedEmitter.addListener( updateDragIndicator );
    this.hasDraggedCardProperty.link( updateDragIndicator );

    const medianTextNode = new Text( '', {
      font: CASConstants.BUTTON_FONT
    } );
    const medianReadoutPanel = new Panel( medianTextNode, {
      stroke: 'lightgray',
      lineWidth: 0.6,
      cornerRadius: 4
    } );
    this.addChild( medianReadoutPanel );

    model.medianValueProperty.link( medianValue => {

      // TODO-PHET_IO: Re-center when the text changes since it could have a different width
      medianTextNode.text = StringUtils.fillIn( centerAndSpreadStrings.medianEqualsValue, { value: model.medianValueProperty.value } );
    } );

    const updateMedianNode = () => {

      const leftmostCard = this.cardNodeCells[ 0 ];

      const MARGIN_X = CARD_SPACING / 2 - MedianBarsNode.HALF_SPLIT_WIDTH;
      const MARGIN_Y = 5;

      // Only redraw the shape if the feature is selected and the data is sorted, and there is at least one card

      if ( model.isShowingTopMedianProperty.value && this.isDataSorted() && leftmostCard ) {
        const barY = leftmostCard.bottom + MARGIN_Y;

        const rightmostCard = this.cardNodeCells[ this.cardNodeCells.length - 1 ];
        const left = getCardPositionX( 0 ) - MARGIN_X;
        const right = getCardPositionX( this.cardNodeCells.length - 1 ) + rightmostCard.width + MARGIN_X;

        this.medianBarsNode.setMedianBarsShape( barY, left, ( left + right ) / 2, right, false );
      }
      else {
        this.medianBarsNode.clear();
      }

      if ( leftmostCard ) {
        medianReadoutPanel.centerX = getCardPositionX( ( this.cardNodeCells.length - 1 ) / 2 ) + leftmostCard.width / 2;
        if ( medianReadoutPanel.left < 0 ) {
          medianReadoutPanel.left = 0;
        }
        medianReadoutPanel.top = leftmostCard.bottom + MARGIN_Y + 13;
        medianReadoutPanel.visible = model.isShowingTopMedianProperty.value;
      }
      else {
        medianReadoutPanel.visible = false;
      }
    };
    this.cardNodeCellsChangedEmitter.addListener( updateMedianNode );
    model.medianValueProperty.link( updateMedianNode );
    model.isShowingTopMedianProperty.link( updateMedianNode );

    this.isReadyForCelebration = false;
  }

  // The listener which is linked to the cardNode.positionProperty
  createDragPositionListener( cardNode: CardNode ): ( position: Vector2 ) => void {
    return ( position: Vector2 ) => {
      if ( cardNode.dragListener.isPressedProperty.value ) {

        const originalCell = this.cardNodeCells.indexOf( cardNode );

        // Find the closest cell to the dragged card
        const closestCell = this.getClosestCell( position.x );

        const currentOccupant = this.cardNodeCells[ closestCell ];

        // No-op if the dragged card is near its home cell
        if ( currentOccupant !== cardNode ) {

          const wasSortedBefore = this.isDataSorted();

          // it's just a pairwise swap
          this.cardNodeCells[ closestCell ] = cardNode;
          this.cardNodeCells[ originalCell ] = currentOccupant;

          // Just animated the displaced occupant
          this.sendToHomeCell( currentOccupant, true );

          // See if the user unsorted the data.  If so, uncheck the "Sort Data" checkbox
          if ( this.model.isSortingDataProperty.value && !this.isDataSorted() ) {
            this.model.isSortingDataProperty.value = false;
          }

          // celebrate after the card was dropped and gets to its home
          this.isReadyForCelebration = this.isDataSorted() && !wasSortedBefore;

          this.cardNodeCellsChangedEmitter.emit();
        }
      }
    };
  }

  startRandomCelebration( callback: () => void ): void {
    const animations = [
      () => this.animateCelebration1( callback ),
      () => this.animateCelebration2( callback ),
      () => this.animateCelebration3( callback )
    ];
    const animation = dotRandom.sample( animations );
    animation();
  }

  animateCelebration1( callback: () => void ) {

    const asyncCounter = new AsyncCounter( this.cardNodeCells.length, callback );

    this.cardNodeCells.forEach( cardNode => {

      const initialScale = cardNode.getScaleVector().x;
      const center = cardNode.center.copy();

      const scaleProperty = new NumberProperty( initialScale );
      scaleProperty.link( scale => cardNode.setScaleMagnitude( scale ) );

      const scaleUpAnimation = new Animation( {
        duration: 0.2,
        targets: [ {
          property: scaleProperty,
          to: initialScale * 1.2,
          easing: Easing.QUADRATIC_IN_OUT
        } ]
      } );
      const updatePosition = () => {
        cardNode.center = center;
      };
      scaleUpAnimation.updateEmitter.addListener( updatePosition );
      scaleUpAnimation.start();

      scaleUpAnimation.endedEmitter.addListener( () => {
        const scaleDownAnimation = new Animation( {
          duration: 0.2,
          targets: [ {
            property: scaleProperty,
            to: initialScale,
            easing: Easing.QUADRATIC_IN_OUT
          } ]
        } );
        scaleDownAnimation.updateEmitter.addListener( updatePosition );
        scaleDownAnimation.endedEmitter.addListener( () => asyncCounter.increment() );
        scaleDownAnimation.start();
      } );
    } );
  }

  animateCelebration2( callback: () => void ) {

    const asyncCounter = new AsyncCounter( this.cardNodeCells.length, callback );

    this.cardNodeCells.forEach( cardNode => {

      const center = cardNode.center.copy();

      const rotationProperty = new NumberProperty( 0 );
      rotationProperty.link( rotation => cardNode.setRotation( rotation ) );

      const animation = new Animation( {
        duration: 0.6,
        targets: [ {
          property: rotationProperty,
          to: 2 * Math.PI,
          easing: Easing.QUADRATIC_IN_OUT
        } ]
      } );
      const updatePosition = () => {
        cardNode.center = center;
      };
      animation.updateEmitter.addListener( updatePosition );
      animation.endedEmitter.addListener( () => asyncCounter.increment() );
      animation.start();
    } );
  }

  /**
   * The cards do the "wave" from left to right.
   */
  animateCelebration3( callback: () => void ): void {
    const asyncCounter = new AsyncCounter( this.cardNodeCells.length, callback );

    this.cardNodeCells.forEach( ( cardNode, index ) => {
      const initialPositionY = cardNode.y;
      const jumpHeight = 30;
      const positionYProperty = new NumberProperty( initialPositionY );
      positionYProperty.link( positionY => { cardNode.y = positionY; } );

      const goUpAnimation = new Animation( {
        duration: 0.2,
        targets: [ {
          property: positionYProperty,
          to: initialPositionY - jumpHeight,
          easing: Easing.QUADRATIC_IN_OUT
        } ]
      } );

      goUpAnimation.endedEmitter.addListener( () => {
        const goDownAnimation = new Animation( {
          duration: 0.2,
          targets: [ {
            property: positionYProperty,
            to: initialPositionY,
            easing: Easing.QUADRATIC_IN_OUT
          } ]
        } );
        goDownAnimation.endedEmitter.addListener( () => asyncCounter.increment() );
        goDownAnimation.start();
      } );

      // offset starting the animation for each card
      stepTimer.setTimeout( () => {
        goUpAnimation.start();
      }, index * 60 );
    } );
  }

  /**
   * Check if all of the data is in order, by using the cells associated with the card node.  Note that means
   * it is using the cell the card may be animating to.
   */
  isDataSorted() {
    let lastValue = null;
    for ( let i = 0; i < this.cardNodeCells.length; i++ ) {
      const value = this.cardNodeCells[ i ].casObject.valueProperty.value!;

      if ( lastValue !== null && value < lastValue ) {
        return false;
      }
      lastValue = value;
    }
    return true;
  }

  // TODO: Do we like the way these are optional?
  // TODO: Separate into two methods: animateToHomeCell vs setAtHomeCell
  sendToHomeCell( cardNode: CardNode, animate = true, duration = 0.3, callback = () => {} ): void {
    const homeIndex = this.cardNodeCells.indexOf( cardNode );
    const homePosition = new Vector2( getCardPositionX( homeIndex ), 0 );

    if ( animate ) {
      cardNode.animateTo( homePosition, duration, callback );
    }
    else {
      cardNode.positionProperty.value = homePosition;
      callback();
    }
  }

  /**
   * Find the cell the dragged card is closest to
   */
  getClosestCell( x: number ): number {
    if ( this.cardNodeCells.length === 0 ) {
      return 0;
    }
    else {
      const cellIndices = _.range( this.cardNodeCells.length );
      return _.minBy( cellIndices, index => Math.abs( x - getCardPositionX( index ) ) )!;
    }
  }

  getCardNode( casObject: CASObject ): CardNode | null {
    return this.cardNodeCells.find( cardNode => cardNode.casObject === casObject ) || null;
  }

  sortData(): void {

    // Base case, nothing to sort
    if ( this.cardNodeCells.length === 0 ) {
      return;
    }

    const visit = () => {

      // Setup asyncCounter, which sets off the next visit() when all cards from the current visit() have finished
      // animating
      const asyncCounter = new AsyncCounter( this.cardNodeCells.length, () => {
        stepTimer.setTimeout( () => visit(), 100 );
      } );

      for ( let i = 0; i < this.cardNodeCells.length; i++ ) {
        const currentCard = this.cardNodeCells[ i ];
        const currentValue = currentCard.casObject.valueProperty.value!;

        // Another loop to find where to insert it, or not at all
        for ( let k = 0; k < i; k++ ) {
          const checkCard = this.cardNodeCells[ k ];
          const checkValue = checkCard.casObject.valueProperty.value!;

          if ( currentValue < checkValue ) {

            // Remove the out of order card
            // TODO: arrayRemove should be in TypeScript
            arrayRemove( this.cardNodeCells, currentCard );

            // Insert it at the desired point.  NOTE the index doesn't need to be recomputed after removal above since
            // the removal was at a higher index
            this.cardNodeCells.splice( k, 0, currentCard );

            // Send all cards to their correct spot to accommodate the newly inserted card, and have each card notify
            // the asyncCounter when in the correct spot
            this.cardNodeCells.forEach( cardNode => this.sendToHomeCell( cardNode, true, 0.3, () => {
              asyncCounter.increment();
            } ) );
            this.cardNodeCellsChangedEmitter.emit(); // TODO: OK if this fires false positives?

            // Exit all loops and wait for next recursive visit() after animation completes
            return;
          }
        }
      }
    };

    visit();
  }

  getDragRange(): Range {
    const maxX = this.cardNodeCells.length > 0 ? getCardPositionX( this.cardNodeCells.length - 1 ) : 0;
    return new Range( 0, maxX );
  }

  clear(): void {
    this.cardNodeCells.length = 0;
    this.cardNodeCellsChangedEmitter.emit();
    this.cardNodeGroup.clear();
  }

  reset(): void {
    this.clear();
    this.totalDragDistanceProperty.reset();
  }
}

// Track the order of the cards as self-state, so that the downstream sim can get the cards in the desired cells
const CardNodeReferenceIO = ReferenceIO( Node.NodeIO );
const CardNodeContainerIO = new IOType( 'CardNodeContainerIO', {
  valueType: CardNodeContainer,
  toStateObject: ( n: CardNodeContainer ) => {
    return {
      cardNodes: n.cardNodeCells.map( cardNode => CardNodeReferenceIO.toStateObject( cardNode ) )
    };
  },
  applyState: ( n: CardNodeContainer, state: any ) => {
    const cardNodes = state.cardNodes.map( ( element: any ) => CardNodeReferenceIO.fromStateObject( element ) );
    n.cardNodeCells.length = 0;
    n.cardNodeCells.push( ...cardNodes );
    n.cardNodeCells.forEach( cardNode => {
      n.sendToHomeCell( cardNode, false );
    } );

    n.cardNodeCellsChangedEmitter.emit();
  },
  stateSchema: {
    cardNodes: ArrayIO( ReferenceIO( CardNodeReferenceIO ) )
  }
} );

centerAndSpread.register( 'CardNodeContainer', CardNodeContainer );
export default CardNodeContainer;