// Copyright 2022-2023, University of Colorado Boulder

/**
 * CAVScreenView serves as the primary base class for all ScreenViews within the simulation. It's designed to integrate
 * various components, including the play area, kicker images, and associated interactions. It also handles user interface
 * elements such as the eraser button, kick button group, and question bar. It works in conjunction with model data and
 * orchestrates the visual representation and interaction for the Center and Variability simulation's screens.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import optionize, { combineOptions, EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import centerAndVariability from '../../centerAndVariability.js';
import CAVConstants from '../CAVConstants.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import { AlignBox, Image, ManualConstraint, Node, Text, VBox } from '../../../../scenery/js/imports.js';
import EraserButton from '../../../../scenery-phet/js/buttons/EraserButton.js';
import NumberLineNode from '../../../../soccer-common/js/view/NumberLineNode.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import BackgroundNode from './BackgroundNode.js';
import CAVAccordionBox from './CAVAccordionBox.js';
import PredictionSlider from './PredictionSlider.js';
import CAVColors from '../CAVColors.js';
import Property from '../../../../axon/js/Property.js';
import Range from '../../../../dot/js/Range.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import CAVModel from '../model/CAVModel.js';
import SoccerSceneView from '../../../../soccer-common/js/view/SoccerSceneView.js';
import KickButtonGroup from './KickButtonGroup.js';
import DynamicProperty from '../../../../axon/js/DynamicProperty.js';
import { KickerImageSet } from '../../../../soccer-common/js/view/KickerCharacterSet.js';
import Kicker from '../../../../soccer-common/js/model/Kicker.js';
import CAVObjectType from '../model/CAVObjectType.js';
import ToggleNode from '../../../../sun/js/ToggleNode.js';
import PlayAreaMedianIndicatorNode from './PlayAreaMedianIndicatorNode.js';
import { SoccerBallPhase } from '../../../../soccer-common/js/model/SoccerBallPhase.js';
import SoundClipPlayer from '../../../../tambo/js/sound-generators/SoundClipPlayer.js';
import SoccerCommonConstants from '../../../../soccer-common/js/SoccerCommonConstants.js';
import CAVSceneView from './CAVSceneView.js';
import CAVNumberLineNode from './CAVNumberLineNode.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import CAVSoccerSceneModel from '../model/CAVSoccerSceneModel.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import CenterAndVariabilityStrings from '../../CenterAndVariabilityStrings.js';
import dragIndicatorHand_png from '../../../images/dragIndicatorHand_png.js';
import SoccerSceneModel from '../../../../soccer-common/js/model/SoccerSceneModel.js';
import SoccerScreenView, { DRAG_CUE_SCALE, SoccerScreenViewOptions } from '../../../../soccer-common/js/view/SoccerScreenView.js';
import StrictOmit from '../../../../phet-core/js/types/StrictOmit.js';
import TReadOnlyProperty from '../../../../axon/js/TReadOnlyProperty.js';
import QuestionBar, { QuestionBarOptions } from '../../../../scenery-phet/js/QuestionBar.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import erase_mp3 from '../../../../scenery-phet/sounds/erase_mp3.js';
import CAVToggleNode from './CAVToggleNode.js';
import Multilink from '../../../../axon/js/Multilink.js';
import isResettingProperty from '../../../../soccer-common/js/model/isResettingProperty.js';
import KickerCharacterSetUSA from '../../../../soccer-common/js/view/KickerCharacterSetUSA.js';
import KickerCharacterSetAfrica from '../../../../soccer-common/js/view/KickerCharacterSetAfrica.js';
import KickerCharacterSetAfricaModest from '../../../../soccer-common/js/view/KickerCharacterSetAfricaModest.js';

type SelfOptions = EmptySelfOptions;

export type CAVScreenViewOptions = SelfOptions & StrictOmit<SoccerScreenViewOptions, 'physicalRange' | 'chartViewWidth' | 'numberLineXMargin'>;

// constants
const GROUND_POSITION_Y = 515;
const INDICATOR_MARGIN = 4;

// Depending on how many characters a regionAndCulture RegionAndCulturePortrayal has will determine how we loop over the characters.
// 30 Kickers must be loaded per screen.
const KICKER_IMAGE_SETS: KickerImageSet[][] = [];

for ( let i = 0; i < CAVConstants.MAX_KICKS_VALUES[ CAVConstants.MAX_KICKS_VALUES.length - 1 ]; i++ ) {
  const locale1MaxNumberOfCharacters = KickerCharacterSetUSA.unnumberedKickersCount;
  const locale2MaxNumberOfCharacters = KickerCharacterSetAfrica.unnumberedKickersCount;
  const locale3MaxNumberOfCharacters = KickerCharacterSetAfricaModest.unnumberedKickersCount;

  const locale1CharacterIndex = i < locale1MaxNumberOfCharacters ? i : i % locale1MaxNumberOfCharacters;
  const locale2CharacterIndex = i < locale2MaxNumberOfCharacters ? i : i % locale2MaxNumberOfCharacters;
  const locale3CharacterIndex = i < locale3MaxNumberOfCharacters ? i : i % locale3MaxNumberOfCharacters;

  KICKER_IMAGE_SETS.push( [ KickerCharacterSetUSA.unnumberedKickerImages[ locale1CharacterIndex ],
    KickerCharacterSetAfrica.unnumberedKickerImages[ locale2CharacterIndex ],
    KickerCharacterSetAfricaModest.unnumberedKickerImages[ locale3CharacterIndex ]
  ] );
}

export default class CAVScreenView extends SoccerScreenView<CAVSoccerSceneModel, CAVModel> {

  // Subclasses add to the backScreenViewLayer for correct z-ordering and correct tab navigation order
  // Soccer balls go behind the accordion box after they land
  protected readonly backScreenViewLayer;
  private readonly middleScreenViewLayer = new Node();
  protected readonly frontScreenViewLayer;
  protected readonly screenViewRootNode = new Node();

  protected readonly intervalToolLayer = new Node();

  protected readonly eraserButton: EraserButton;

  // The accordion box in the top portion of the screen. Initializes as null and is set by setAccordionBox.
  protected accordionBox: CAVAccordionBox | null = null;

  protected override readonly playAreaNumberLineNode: NumberLineNode;
  private readonly sceneViews: SoccerSceneView[];

  private readonly updateMedianNode: () => void;
  private readonly updateDragIndicatorNode: () => void;

  protected readonly kickButtonGroup: KickButtonGroup;

  protected readonly soccerAreaTandem: Tandem;

  // These Nodes are created here but added in the subclasses, since the subclass specifies how and where (what layer)
  // they are added.
  protected readonly questionBar: QuestionBar;
  protected readonly resetAllButton: ResetAllButton;

  protected constructor( model: CAVModel, providedOptions: CAVScreenViewOptions ) {

    const options = optionize<CAVScreenViewOptions, SelfOptions, SoccerScreenViewOptions>()( {
      physicalRange: CAVConstants.PHYSICAL_RANGE,
      chartViewWidth: CAVConstants.CHART_VIEW_WIDTH,
      numberLineXMargin: CAVConstants.NUMBER_LINE_MARGIN_X
    }, providedOptions );

    super( model, options );

    this.resetAllButton = new ResetAllButton( {
      listener: () => {
        assert && assert( !isResettingProperty.value, 'cannot reset while already resetting' );

        isResettingProperty.value = true;
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        isResettingProperty.value = false;
      },
      right: this.layoutBounds.maxX - SoccerCommonConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - SoccerCommonConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );

    this.questionBar = new QuestionBar( this.layoutBounds, this.visibleBoundsProperty, combineOptions<QuestionBarOptions>( {
      barHeight: 50,
      tandem: options.tandem.createTandem( 'questionBar' ),
      textOptions: {
        font: new PhetFont( {
          weight: 'bold',
          size: '20px'
        } )
      },
      visiblePropertyOptions: {
        phetioFeatured: true
      }
    }, options.questionBarOptions ) );

    this.soccerAreaTandem = options.tandem.createTandem( 'soccerArea' );

    this.playAreaNumberLineNode = new CAVNumberLineNode(
      new DynamicProperty( model.selectedSceneModelProperty, {
        derive: 'meanValueProperty'
      } ),
      this.modelViewTransform,
      model.isPlayAreaMeanVisibleProperty,
      new DynamicProperty( model.selectedSceneModelProperty, {
        derive: 'dataRangeProperty'
      } ),
      CAVConstants.CHART_VIEW_WIDTH,
      CAVConstants.PHYSICAL_RANGE, {
        includeXAxis: false,
        includeRangeOnXAxis: false,
        includeMeanStroke: true,
        x: CAVConstants.NUMBER_LINE_MARGIN_X,
        y: GROUND_POSITION_Y
      } );

    this.sceneViews = model.sceneModels.map( ( sceneModel, index ) => new CAVSceneView(
      model,
      sceneModel,
      this.keyboardDragArrowNode,
      ( kicker, sceneModel ) => this.getKickerImageSets( kicker, sceneModel ),
      this.modelViewTransform,
      CAVConstants.PHYSICAL_RANGE,

      // The variability screen has multiple scenes, and we want to connect these to a specific kicker, while the first
      // two screens have multiple kickers in the same scene.
      model.sceneModels.length === 1 ?
      options.tandem.createTandem1Indexed( CAVConstants.SCENE_VIEW_TANDEM, index ) :
      options.tandem.createTandem( `sceneKicker${index + 1}View` )
    ) );

    const backLayerToggleNode = new CAVToggleNode( model.selectedSceneModelProperty, this.sceneViews.map( sceneView => {
        return {
          value: sceneView.sceneModel,
          createNode: () => sceneView.backSceneViewLayer
        };
      }
    ), {
      alignChildren: ToggleNode.NONE
    } );

    this.backScreenViewLayer = new Node( {
      children: [
        new BackgroundNode( GROUND_POSITION_Y, this.visibleBoundsProperty ),

        // median highlight appears in front of the ticks, so these need to be in the background.
        this.playAreaNumberLineNode,

        this.intervalToolLayer,
        backLayerToggleNode
      ]
    } );
    this.backScreenViewLayer.pdomOrder = [
      backLayerToggleNode
    ];

    this.eraserButton = new EraserButton( {
      tandem: options.tandem.createTandem( 'eraserButton' ),
      listener: () => {

        // Interrupt dragging of existing objects
        this.interruptSubtreeInput();

        model.clearData();
      },
      iconWidth: 26,
      right: this.resetAllButton.left - SoccerCommonConstants.SCREEN_VIEW_X_MARGIN,
      centerY: this.resetAllButton.centerY,
      soundPlayer: new SoundClipPlayer( erase_mp3, {
        soundClipOptions: { initialOutputLevel: 0.22 }
      } ),
      touchAreaXDilation: 6,
      touchAreaYDilation: 6
    } );

    this.questionBar.visibleProperty.link( () => this.updateAccordionBoxPosition() );

    this.kickButtonGroup = new KickButtonGroup( model.selectedSceneModelProperty, {

      // Center under where the soccer player nodes will be. Since the KickerNode are positioned in the
      // SceneView, we can't use those node bounds to position the kick buttons, so this is a manually tuned magic number.
      centerX: this.modelViewTransform.modelToViewX( 0 ) - 63,

      // Center between the ground and the bottom of the layout bounds.  Adjust because of the asymmetries:
      // the soccer player foot falls beneath the ground, and the shading of the buttons.
      centerY: ( GROUND_POSITION_Y + this.layoutBounds.maxY ) / 2 + 2,
      tandem: this.soccerAreaTandem.createTandem( 'kickButtonGroup' ),

      visiblePropertyOptions: {
        phetioFeatured: true
      }
    } );

    const dragIndicatorArrowNode = SoccerCommonConstants.CREATE_KEYBOARD_ARROW_NODE( model.dragIndicatorModel.isDragIndicatorVisibleProperty, DRAG_CUE_SCALE );

    const dragIndicatorHandImage = new Image( dragIndicatorHand_png, {
      scale: 0.07,
      visibleProperty: model.dragIndicatorModel.isDragIndicatorVisibleProperty,
      rotation: Math.PI / 4
    } );

    // Utility function to prevent nodes from overlapping with the accordion box
    const repositionNodeIfOverlappingAccordionBox = ( node: Node ) => {
      if ( this.accordionBox ) {
        if ( node.top < this.accordionBox.bottom + INDICATOR_MARGIN ) {
          node.top = this.accordionBox.bottom + INDICATOR_MARGIN;
        }
      }
    };

    // When cueing arrows are visible the bottom of the MedianIndicator may need to adjust.
    const adjustMedianIndicatorBottom = ( topObjectPositionY: number ) => {
      playAreaMedianIndicatorNode.bottom = topObjectPositionY - 15;
    };

    this.updateDragIndicatorNode = () => {
      const dragIndicatorVisible = model.dragIndicatorModel.isDragIndicatorVisibleProperty.value;
      const dragIndicatorValue = model.dragIndicatorModel.valueProperty.value;

      if ( dragIndicatorVisible && dragIndicatorValue ) {
        const topObjectPositionY = this.getTopObjectPositionY( dragIndicatorValue );
        dragIndicatorArrowNode.center = new Vector2(
          this.modelViewTransform.modelToViewX( dragIndicatorValue ),

          // This value must be kept in sync with the other occurrences of CREATE_KEYBOARD_ARROW_NODE that are shown for the keyboard
          topObjectPositionY - 11.5
        );

        // If the drag indicator is visible and its stack matches the median stack, try to place the median indicator
        // above the drag indicator, while avoiding overlap with the accordion box.
        if ( model.selectedSceneModelProperty.value.medianValueProperty.value === dragIndicatorValue ) {
          adjustMedianIndicatorBottom( topObjectPositionY );
          repositionNodeIfOverlappingAccordionBox( playAreaMedianIndicatorNode );
        }

        // We never want the dragIndicatorArrowNode to overlap the accordion Box.
        repositionNodeIfOverlappingAccordionBox( dragIndicatorArrowNode );
      }
    };

    ManualConstraint.create( this, [ dragIndicatorArrowNode ], dragIndicatorArrowNodeProxy => {

      // Pixel adjustments needed with rotation option on dragIndicatorHandImage and empirically determined to match design
      dragIndicatorHandImage.right = dragIndicatorArrowNodeProxy.left + 22;
      dragIndicatorHandImage.top = dragIndicatorArrowNodeProxy.bottom + Math.abs( this.modelViewTransform.modelToViewDeltaY( CAVObjectType.SOCCER_BALL.radius ) ) - 5;
    } );

    dragIndicatorArrowNode.addLinkedElement( model.dragIndicatorModel.valueProperty );

    model.dragIndicatorModel.isDragIndicatorVisibleProperty.link( this.updateDragIndicatorNode );
    model.dragIndicatorModel.valueProperty.link( this.updateDragIndicatorNode );
    this.visibleBoundsProperty.link( this.updateDragIndicatorNode );
    this.model.selectedSceneModelProperty.link( this.updateDragIndicatorNode );
    this.model.sceneModels.forEach( sceneModel => {
      sceneModel.medianValueProperty.link( this.updateDragIndicatorNode );
      sceneModel.objectChangedEmitter.addListener( this.updateDragIndicatorNode );
    } );
    this.model.focusedSoccerBallProperty.link( this.updateDragIndicatorNode );

    const playAreaMedianIndicatorNode = new PlayAreaMedianIndicatorNode();

    const frontLayerToggleNode = new CAVToggleNode( model.selectedSceneModelProperty, this.sceneViews.map( sceneView => {
        return {
          value: sceneView.sceneModel,
          createNode: () => sceneView.frontSceneViewLayer
        };
      }
    ), {
      alignChildren: ToggleNode.NONE
    } );

    this.frontScreenViewLayer = new Node( {
      children: [
        frontLayerToggleNode,
        this.eraserButton,
        this.resetAllButton,
        this.questionBar,
        this.kickButtonGroup,
        playAreaMedianIndicatorNode
      ]
    } );

    this.updateMedianNode = () => {
      const sceneModel = this.model.selectedSceneModelProperty.value;
      const medianValue = sceneModel.medianValueProperty.value;
      const visible = medianValue !== null && model.isPlayAreaMedianVisibleProperty.value;

      if ( visible ) {
        const topObjectPositionY = this.getTopObjectPositionY( medianValue );

        playAreaMedianIndicatorNode.centerX = this.modelViewTransform.modelToViewX( medianValue );
        playAreaMedianIndicatorNode.bottom = topObjectPositionY;

        // If cueing indicators are visible and their stack matches the median stack, adjustments needs to be made.
        if ( medianValue === model.dragIndicatorModel.valueProperty.value && model.dragIndicatorModel.isDragIndicatorVisibleProperty.value ) {
          adjustMedianIndicatorBottom( topObjectPositionY );

        }
        if ( medianValue === model.focusedSoccerBallProperty.value?.valueProperty.value &&
             ( model.isKeyboardDragArrowVisibleProperty.value ) ) {
          adjustMedianIndicatorBottom( topObjectPositionY );
        }

        // The playAreaMedianIndicatorNode shouldn't overlap the accordion box
        repositionNodeIfOverlappingAccordionBox( playAreaMedianIndicatorNode );
      }
      playAreaMedianIndicatorNode.visible = visible;
    };

    Multilink.multilink( [ model.dragIndicatorModel.isDragIndicatorVisibleProperty, model.isKeyboardDragArrowVisibleProperty ],
      () => {
        this.updateMedianNode();
      } );


    this.model.selectedSceneModelProperty.link( this.updateMedianNode );
    this.model.sceneModels.forEach( sceneModel => {
      sceneModel.medianValueProperty.link( this.updateMedianNode );
      sceneModel.objectChangedEmitter.addListener( this.updateMedianNode );
    } );
    this.visibleBoundsProperty.link( this.updateMedianNode );
    model.isPlayAreaMedianVisibleProperty.link( this.updateMedianNode );

    this.middleScreenViewLayer.addChild( dragIndicatorArrowNode );
    this.middleScreenViewLayer.addChild( dragIndicatorHandImage );

    // Add to screenViewRootNode for alternativeInput
    this.screenViewRootNode.addChild( this.backScreenViewLayer );
    this.screenViewRootNode.addChild( this.middleScreenViewLayer );
    this.screenViewRootNode.addChild( this.frontScreenViewLayer );

    this.addChild( this.screenViewRootNode );
    this.addGrabReleaseCue();
  }

  // calculate where the top object is at a given value
  private getTopObjectPositionY( value: number ): number {
    const sceneModel = this.model.selectedSceneModelProperty.value;
    const ballsAtValue = sceneModel.soccerBalls.filter( soccerBall =>
      soccerBall.valueProperty.value === value && soccerBall.soccerBallPhaseProperty.value === SoccerBallPhase.STACKED );
    const modelHeight = ballsAtValue.length * CAVObjectType.SOCCER_BALL.radius * 2 * ( 1 - SoccerCommonConstants.SOCCER_BALL_OVERLAP );
    const viewHeight = this.modelViewTransform.modelToViewDeltaY( modelHeight );
    return this.modelViewTransform.modelToViewY( 0 ) + viewHeight;
  }

  private updateAccordionBoxPosition(): void {
    if ( this.accordionBox ) {
      const top = this.questionBar.visible ? this.questionBar.bottom : this.questionBar.top;
      this.accordionBox.top = top + CAVConstants.ACCORDION_BOX_TOP_MARGIN;
    }
  }

  /**
   * Floating layout that keeps the ground near the ground, and accordion box near the question bar
   */
  public override layout( viewBounds: Bounds2 ): void {
    super.layout( viewBounds, {
      verticalAlign: 'bottom'
    } );

    this.accordionBox && this.updateAccordionBoxPosition();
  }

  /**
   * Called by subtype constructors to finish initialization. This will appear in the middle layer in z-ordering,
   * so that kicked soccer balls go in front, and landed soccer balls go behind.
   */
  protected setAccordionBox( accordionBox: CAVAccordionBox ): void {
    this.accordionBox = accordionBox;
    this.middleScreenViewLayer.addChild( this.accordionBox );
    this.updateAccordionBoxPosition();

    this.accordionBox.boundsProperty.link( this.updateMedianNode );
    this.accordionBox.boundsProperty.link( this.updateDragIndicatorNode );
    this.accordionBox.boundsProperty.link( () => {
      this.sceneViews.forEach( sceneView => sceneView.setGroupFocusHighlightTop( this.accordionBox!.bounds.bottom ) );
    } );
  }

  /**
   * Add controls to the play area. This is the same for all screens, so factored out here.
   * @returns the AlignBox so the pdom order can be set
   */
  protected addPlayAreaControls( controlNode: Node, tandem: Tandem ): AlignBox {

    // In order to use the AlignBox we need to know the distance from the top of the screen, to the top of the grass.
    const BOTTOM_CHECKBOX_PANEL_LEFT_MARGIN = 30;
    const BOTTOM_CHECKBOX_PANEL_Y_MARGIN = this.layoutBounds.maxY - this.modelViewTransform.modelToViewY( 0 ) + 12.5;

    const controlsVBox = new VBox( {
      spacing: 15,
      align: 'left',
      children: [
        controlNode,
        new Text( new PatternStringProperty( CenterAndVariabilityStrings.valueKicksPatternStringProperty,
          { value: this.numberOfKicksProperty }, {
            tandem: tandem.createTandem( 'valueKicksPatternStringProperty' )
          } ), {
          font: CAVConstants.MAIN_FONT,
          maxWidth: CAVConstants.CHECKBOX_TEXT_MAX_WIDTH + 50,
          tandem: tandem.createTandem( 'numberOfKicksText' ),
          phetioVisiblePropertyInstrumented: true,
          visiblePropertyOptions: {
            phetioFeatured: true
          }
        } )
      ]
    } );

    const checkboxBounds = this.layoutBounds.withMinX(
      this.layoutBounds.minX + CAVConstants.NUMBER_LINE_MARGIN_X + CAVConstants.CHART_VIEW_WIDTH + BOTTOM_CHECKBOX_PANEL_LEFT_MARGIN );

    const bottomControls = new AlignBox( controlsVBox, {
      alignBounds: checkboxBounds,
      xAlign: 'left',
      yAlign: 'bottom',
      yMargin: BOTTOM_CHECKBOX_PANEL_Y_MARGIN
    } );

    this.screenViewRootNode.addChild( bottomControls );

    return bottomControls;
  }

  // Set the pdom order. Only the variability screen has sceneRadioButtons and variabilityMeasureRadioButtons
  protected cavSetPDOMOrder( bottomControls: Node, predictionTools: Node[], infoButton: Node, sceneKickerRadioButtonGroup?: Node, variabilityMeasureRadioButtonGroup?: Node ): void {
    this.screenViewRootNode.pdomOrder = [
      ...( sceneKickerRadioButtonGroup ? [ sceneKickerRadioButtonGroup ] : [] ),
      this.kickButtonGroup,
      this.backScreenViewLayer,
      bottomControls,
      ...predictionTools,
      this.intervalToolLayer,
      ...( variabilityMeasureRadioButtonGroup ? [ variabilityMeasureRadioButtonGroup ] : [] ),
      this.accordionBox,
      infoButton,
      this.eraserButton,
      this.resetAllButton
    ];
  }

  public getKickerImageSets( kicker: Kicker, sceneModel: SoccerSceneModel ): KickerImageSet[] {
    return KICKER_IMAGE_SETS[ kicker.initialPlaceInLine ];
  }

  /**
   * The predictMedianNode is shared in the Median screen and MeanAndMedianScreen, so factored out here.
   */
  public static createPredictMedianNode( predictMedianValueProperty: Property<number>, isPredictMedianVisibleProperty: TReadOnlyProperty<boolean>, modelViewTransform: ModelViewTransform2, tandem: Tandem ): PredictionSlider {
    return new PredictionSlider( predictMedianValueProperty, modelViewTransform, CAVConstants.PHYSICAL_RANGE, {
      predictionThumbNodeOptions: {
        color: CAVColors.medianColorProperty,
        style: 'arrow'
      },
      valueProperty: predictMedianValueProperty,
      enabledRangeProperty: new Property<Range>( CAVConstants.PHYSICAL_RANGE ),
      roundToInterval: 0.5,

      // always step 0.5 even if holding shift (median is always integer or half-integer)
      shiftKeyboardStep: 0.5,
      visibleProperty: isPredictMedianVisibleProperty,
      tandem: tandem,

      phetioFeatured: true
    } );
  }
}

centerAndVariability.register( 'CAVScreenView', CAVScreenView );