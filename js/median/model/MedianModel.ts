// Copyright 2022-2023, University of Colorado Boulder

/**
 * Model for the "Median" screen
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import centerAndVariability from '../../centerAndVariability.js';
import CardModel from '../../median/model/CardModel.js';
import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import CAVModel, { CAVModelOptions } from '../../common/model/CAVModel.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import CAVConstants, { MAX_KICKS_PROPERTY } from '../../common/CAVConstants.js';
import { kickDistanceStrategyFromStateObject, RandomSkewStrategy } from '../../common/model/RandomSkewStrategy.js';
import CAVSoccerSceneModel from '../../common/model/CAVSoccerSceneModel.js';
import CAVSoccerBall from '../../common/model/CAVSoccerBall.js';
import NumberTone from '../../soccer-common/model/NumberTone.js';
import DerivedProperty from '../../../../axon/js/DerivedProperty.js';

type SelfOptions = EmptySelfOptions;
type MedianModelOptions = SelfOptions & Pick<CAVModelOptions, 'tandem'>;

export default class MedianModel extends CAVModel {

  public readonly cards: CardModel[];
  public readonly isSortingDataProperty: BooleanProperty;
  public readonly isTopMedianVisibleProperty: BooleanProperty;
  public readonly areCardsSortedProperty: BooleanProperty;

  public constructor( providedOptions: MedianModelOptions ) {

    const options = optionize<MedianModelOptions, SelfOptions, CAVModelOptions>()( {
      instrumentMeanPredictionProperty: false
    }, providedOptions );

    const maxKicksAllowed = [ 5, 10, 15 ];

    const maxKicksProperty = new DerivedProperty( [ MAX_KICKS_PROPERTY ], maxKicks => {
      return maxKicksAllowed.includes( maxKicks ) ? maxKicks : maxKicksAllowed[ maxKicksAllowed.length - 1 ];
    }, {
      validValues: maxKicksAllowed,
      tandem: options.tandem.createTandem( 'maxKicksProperty' )
    } );

    const sceneModel = new CAVSoccerSceneModel(
      maxKicksProperty,
      maxKicksAllowed,
      new RandomSkewStrategy(),
      CAVConstants.PHYSICAL_RANGE,
      kickDistanceStrategyFromStateObject,
      CAVSoccerBall.createSoccerBall, {
        tandem: options.tandem.createTandem( 'sceneModel' )
      } );

    sceneModel.soccerBalls.forEach( soccerBall => {
      soccerBall.toneEmitter.addListener( value => {
        NumberTone.play( this, sceneModel, value );
      } );
    } );

    super( maxKicksProperty, [ sceneModel ], options );

    this.cards = this.sceneModels[ 0 ].soccerBalls.map( ( soccerBall, index ) => new CardModel( soccerBall, {
      tandem: options.tandem.createTandem( 'cards' ).createTandem1Indexed( 'card', index )
    } ) );

    this.isSortingDataProperty = new BooleanProperty( false, {
      tandem: options.tandem.createTandem( 'isSortingDataProperty' )
    } );

    this.isTopMedianVisibleProperty = new BooleanProperty( false, {
      tandem: options.tandem.createTandem( 'isTopMedianVisibleProperty' )
    } );

    // For PhET-iO
    this.areCardsSortedProperty = new BooleanProperty( true, {
      tandem: options.tandem.createTandem( 'areCardsSortedProperty' ),
      phetioReadOnly: true
    } );
  }

  public override reset(): void {
    super.reset();
    this.isSortingDataProperty.reset();
    this.isTopMedianVisibleProperty.reset();
  }
}

centerAndVariability.register( 'MedianModel', MedianModel );