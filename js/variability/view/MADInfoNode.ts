// Copyright 2023, University of Colorado Boulder

import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import { HBox, HSeparator, RichText, Text, VBox } from '../../../../scenery/js/imports.js';
import CenterAndVariabilityStrings from '../../CenterAndVariabilityStrings.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import VariabilityModel from '../model/VariabilityModel.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import centerAndVariability from '../../centerAndVariability.js';
import Utils from '../../../../dot/js/Utils.js';
import CAVConstants from '../../common/CAVConstants.js';
import MADNode from './MADNode.js';
import MathSymbols from '../../../../scenery-phet/js/MathSymbols.js';
import VariabilitySceneModel from '../model/VariabilitySceneModel.js';
import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import NumberLineNode from '../../soccer-common/view/NumberLineNode.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';

export default class MADInfoNode extends VBox {
  public constructor( model: VariabilityModel, sceneModel: VariabilitySceneModel, playAreaNumberLineNode: NumberLineNode, options: PickRequired<PhetioObjectOptions, 'tandem'> ) {

    const hasEnoughDataProperty = new DerivedProperty( [ sceneModel.numberOfDataPointsProperty ], numberOfDataPoints => numberOfDataPoints >= 1 );

    const numeratorText = new Text( '', { fontSize: 16, maxWidth: 550 } );
    const denominatorText = new Text( '', { fontSize: 16 } );

    const resultNumeratorText = new Text( '', { fontSize: 16 } );
    const resultDenominatorText = new Text( '', { fontSize: 16 } );

    const footnoteVisibleProperty = new BooleanProperty( false );

    sceneModel.objectChangedEmitter.addListener( () => {

      const deviations = sceneModel.getDeviationTenths();
      const denominator = sceneModel.getSortedStackedObjects().length;

      numeratorText.string = deviations.join( ' + ' );
      denominatorText.string = denominator.toString();

      resultNumeratorText.string = sceneModel.getSumOfDeviationTenths();
      resultDenominatorText.string = denominator.toString();
    } );

    const calculationFraction = new VBox( {
      children: [ numeratorText, new HSeparator(), denominatorText ],
      align: 'center'
    } );

    const resultFraction = new VBox( {
      children: [ resultNumeratorText, new HSeparator(), resultDenominatorText ],
      align: 'center'
    } );

    super( {
      align: 'left',
      spacing: 6,
      children: [
        new RichText( CenterAndVariabilityStrings.madDescriptionStringProperty, {
          font: new PhetFont( 18 ),
          maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH,
          layoutOptions: { bottomMargin: CAVConstants.INFO_DIALOG_SUBHEADING_BOTTOM_MARGIN }
        } ),

        new HBox( {
          spacing: 6,
          align: 'top',
          children: [
            new HBox( {
              spacing: 10,
              children: [
                new Text( CenterAndVariabilityStrings.madEqualsStringProperty, { fontSize: 18 } ),
                calculationFraction,
                new Text( MathSymbols.EQUAL_TO, { fontSize: 18 } ),
                resultFraction
              ],
              visibleProperty: hasEnoughDataProperty
            } )
          ]
        } ),

        new Text( new PatternStringProperty( CenterAndVariabilityStrings.madCalculationResultPatternStringProperty, {

          // See CAVConstants.STRING_VALUE_NULL_MAP
          mad: new DerivedProperty( [ sceneModel.madValueProperty ], madValue => madValue === null ? 'null' : Utils.toFixed( madValue, 1 ) )
        }, {
          tandem: options.tandem.createTandem( 'madCalculationStringProperty' )
        } ), {
          fontSize: 18, visibleProperty: hasEnoughDataProperty, maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH, layoutOptions: { bottomMargin: 10 }
        } ),

        new HBox( {
          visibleProperty: footnoteVisibleProperty,
          children: [
            new Text( '*', { fontSize: 14 } ),
            new Text( CenterAndVariabilityStrings.valuesMayNotMatchDueToRoundingErrorsStringProperty, {
              fontSize: 12
            } )
          ]
        } ),

        new MADNode( model, sceneModel, playAreaNumberLineNode, {
          parentContext: 'info',
          tandem: options.tandem.createTandem( 'madNode' )
        } )
      ]
    } );
  }
}

centerAndVariability.register( 'MADInfoNode', MADInfoNode );