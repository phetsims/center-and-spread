// Copyright 2022-2023, University of Colorado Boulder

/**
 * The MeanAndMedianModel class represents the model for the "Mean & Median" screen.
 * This model keeps track of the behaviors and Properties associated with the representation
 * of mean and median values in a soccer scene.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */


import centerAndVariability from '../../centerAndVariability.js';
import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import CAVModel, { CAVModelOptions } from '../../common/model/CAVModel.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import CAVConstants, { MAX_KICKS_PROPERTY } from '../../common/CAVConstants.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import isSettingPhetioStateProperty from '../../../../tandem/js/isSettingPhetioStateProperty.js';
import CAVSoccerSceneModel from '../../common/model/CAVSoccerSceneModel.js';
import Utils from '../../../../dot/js/Utils.js';
import CAVSoccerBall from '../../common/model/CAVSoccerBall.js';
// eslint-disable-next-line no-view-imported-from-model
import MedianAnimationTone from '../../median/view/MedianAnimationTone.js';
import Property from '../../../../axon/js/Property.js';
import KickDistributionStrategy from '../../../../soccer-common/js/model/KickDistributionStrategy.js';
import NumberTone from '../../../../soccer-common/js/model/NumberTone.js';
import checkboxCheckedSoundPlayer from '../../../../tambo/js/shared-sound-players/checkboxCheckedSoundPlayer.js';
import PreferencesModel from '../../../../joist/js/preferences/PreferencesModel.js';

type SelfOptions = EmptySelfOptions;
type MeanAndMedianModelOptions = SelfOptions & Pick<CAVModelOptions, 'tandem'>;

// constants
const HIGHLIGHT_ANIMATION_TIME_STEP = 0.25; // in seconds

export default class MeanAndMedianModel extends CAVModel {

  // Indicates how far the show median animation has progressed, or null if not animating. Not PhET-iO instrumented since
  // it represents a transient value.
  private highlightAnimationIndex: number | null = null;

  private lastHighlightAnimationStepTime = 0;
  public readonly showMedianBarArrowProperty = new BooleanProperty( true );
  public readonly isMedianVisibleProperty: BooleanProperty;
  public readonly isMeanVisibleProperty: BooleanProperty;
  public readonly isPredictMeanVisibleProperty: BooleanProperty;
  public readonly predictMeanValueProperty: NumberProperty;
  public readonly isPredictMeanKeyboardDraggingProperty: Property<boolean>;

  public constructor( preferencesModel: PreferencesModel, providedOptions: MeanAndMedianModelOptions ) {

    const accordionBoxTandem = providedOptions.tandem.createTandem( 'plotAccordionBox' );

    const options = optionize<MeanAndMedianModelOptions, SelfOptions, CAVModelOptions>()( {
      accordionBoxTandem: accordionBoxTandem,
      instrumentMeanProperty: true,
      instrumentDataPointVisibilityProperty: true
    }, providedOptions );

    const sceneModel = new CAVSoccerSceneModel(
      MAX_KICKS_PROPERTY,
      CAVConstants.MAX_KICKS_VALUES,
      { type: 'randomSkew', skewType: KickDistributionStrategy.chooseSkewDirection(), values: null },
      CAVConstants.PHYSICAL_RANGE,
      CAVSoccerBall.createSoccerBall,

      // The regionAndCulturePortrayalProperty will not be undefined since characterSets were passed into the PreferencesModel at startup.
      preferencesModel.localizationModel.regionAndCulturePortrayalProperty!,
      { tandem: options.tandem.createTandem( 'sceneModel' ) }
    );

    super( MAX_KICKS_PROPERTY, [ sceneModel ], options );

    this.isMeanVisibleProperty = new BooleanProperty( false, {
      tandem: accordionBoxTandem.createTandem( 'isMeanVisibleProperty' ),
      phetioFeatured: true
    } );
    this.isMedianVisibleProperty = new BooleanProperty( false, {
      tandem: accordionBoxTandem.createTandem( 'isMedianVisibleProperty' ),
      phetioFeatured: true
    } );

    // Don't show animation on startup or when setting PhET-iO state
    this.isMedianVisibleProperty.lazyLink( isMedianVisible => {
      if ( isMedianVisible && sceneModel.medianValueProperty.value !== null ) {

        if ( !isSettingPhetioStateProperty.value ) {
          this.setHighlightAnimationIndex( 0 );
          this.lastHighlightAnimationStepTime = sceneModel.timeProperty.value;
        }
        else {

          // When setting PhET-iO state, show the arrow right away.
          this.showMedianBarArrowProperty.value = true;
        }
      }
      else if ( isMedianVisible && !isSettingPhetioStateProperty.value ) {
        checkboxCheckedSoundPlayer.play();
      }
      else {
        this.clearAnimation();
        if ( sceneModel.getSortedLandedObjects().length > 0 ) {
          this.showMedianBarArrowProperty.value = false;
        }
      }
    } );

    this.predictMeanValueProperty = new NumberProperty( 1.5, {
      range: CAVConstants.PHYSICAL_RANGE,
      tandem: this.soccerAreaTandem.createTandem( 'predictMeanValueProperty' ),
      phetioFeatured: true
    } );
    this.isPredictMeanVisibleProperty = new BooleanProperty( false, {
      tandem: this.soccerAreaTandem.createTandem( 'isPredictMeanVisibleProperty' ),
      phetioFeatured: true
    } );

    sceneModel.objectValueBecameNonNullEmitter.addListener( () => this.updateAnimation() );

    this.isPredictMeanKeyboardDraggingProperty = new BooleanProperty( false );

    this.predictMeanValueProperty.lazyLink( ( predictMeanValue, oldPredictMeanValue ) => {
      if ( this.isPredictMeanKeyboardDraggingProperty.value ) {
        NumberTone.playMean( predictMeanValue );
      }
      else if ( this.crossedCheckpoint( predictMeanValue, oldPredictMeanValue ) ) {
        NumberTone.playMean( Utils.roundToInterval( predictMeanValue, 0.5 ) );
      }
    } );
  }

  public override reset(): void {
    super.reset();
    this.setHighlightAnimationIndex( null );
    this.showMedianBarArrowProperty.reset();
    this.isMeanVisibleProperty.reset();
    this.isMedianVisibleProperty.reset();
    this.predictMeanValueProperty.reset();
    this.isPredictMeanVisibleProperty.reset();
  }

  public override step( dt: number ): void {
    super.step( dt );
    this.updateAnimation();
  }

  private clearAnimation(): void {
    this.setHighlightAnimationIndex( null );
    this.selectedSceneModelProperty.value.soccerBalls.forEach( soccerBall => soccerBall.isAnimationHighlightVisibleProperty.set( false ) );
  }

  private updateAnimation(): void {

    const sortedObjects = this.selectedSceneModelProperty.value.getSortedStackedObjects();

    for ( let i = 0; i < sortedObjects.length / 2; i++ ) {
      const isHighlighted = i === this.highlightAnimationIndex;
      sortedObjects[ i ].isAnimationHighlightVisibleProperty.value = isHighlighted;

      const upperIndex = sortedObjects.length - 1 - i;
      sortedObjects[ upperIndex ].isAnimationHighlightVisibleProperty.value = isHighlighted;
    }

    const isAnimationFinished = this.highlightAnimationIndex !== null &&
                                this.highlightAnimationIndex >= sortedObjects.length / 2;

    if ( isAnimationFinished ) {
      this.clearAnimation();
      this.showMedianBarArrowProperty.value = true;
    }
    else if ( this.highlightAnimationIndex !== null &&
              this.selectedSceneModelProperty.value.timeProperty.value > this.lastHighlightAnimationStepTime + HIGHLIGHT_ANIMATION_TIME_STEP ) {

      // if the animation has already started, step it to the next animation index
      this.setHighlightAnimationIndex( this.highlightAnimationIndex + 1 );
      this.lastHighlightAnimationStepTime = this.selectedSceneModelProperty.value.timeProperty.value;
    }
  }

  private setHighlightAnimationIndex( value: number | null ): void {
    this.highlightAnimationIndex = value;
    if ( typeof value === 'number' ) {
      const sortedObjects = this.selectedSceneModelProperty.value.getSortedStackedObjects();

      const a = this.highlightAnimationIndex!;
      const b = Math.ceil( sortedObjects.length / 2 );

      if ( a <= b + 1 ) {

        const numberOfStepsAway = b - a;

        if ( numberOfStepsAway >= 1 ) {
          MedianAnimationTone.playIntermediateTone( numberOfStepsAway - 1, this.sceneModels[ 0 ].medianValueProperty.value! );
        }
        else {
          MedianAnimationTone.playFinalTone( this.sceneModels[ 0 ].medianValueProperty.value! );
        }
      }
    }
  }
}

centerAndVariability.register( 'MeanAndMedianModel', MeanAndMedianModel );