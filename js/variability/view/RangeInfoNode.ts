// Copyright 2023, University of Colorado Boulder

import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import { Text, VBox } from '../../../../scenery/js/imports.js';
import CenterAndVariabilityStrings from '../../CenterAndVariabilityStrings.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import VariabilityModel from '../model/VariabilityModel.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import centerAndVariability from '../../centerAndVariability.js';
import RangeNode from './RangeNode.js';
import CAVConstants from '../../common/CAVConstants.js';
import VariabilitySceneModel from '../model/VariabilitySceneModel.js';
import NumberLineNode from '../../common/view/NumberLineNode.js';

export default class RangeInfoNode extends VBox {
  public constructor( model: VariabilityModel, sceneModel: VariabilitySceneModel, playAreaNumberLineNode: NumberLineNode, options: PickRequired<PhetioObjectOptions, 'tandem'> ) {

    const hasEnoughDataProperty = new DerivedProperty( [ sceneModel.numberOfDataPointsProperty ], numberOfDataPoints => numberOfDataPoints >= 1 );
    super( {
      align: 'left',
      spacing: 5,
      children: [
        new Text( CenterAndVariabilityStrings.rangeStringProperty, {
          fontSize: 25,
          maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH,
          layoutOptions: { bottomMargin: CAVConstants.INFO_DIALOG_HEADING_BOTTOM_MARGIN }
        } ),
        new Text( CenterAndVariabilityStrings.rangeDescriptionStringProperty, {
          fontSize: 18, maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH,
          layoutOptions: { bottomMargin: CAVConstants.INFO_DIALOG_SUBHEADING_BOTTOM_MARGIN }
        } ),

        // TODO: String key name, see https://github.com/phetsims/center-and-variability/issues/181
        new Text( new PatternStringProperty( CenterAndVariabilityStrings.rangeCalculationPatternStringProperty, {
          max: sceneModel.maxValueProperty,
          min: sceneModel.minValueProperty
        } ), { fontSize: 18, visibleProperty: hasEnoughDataProperty, maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH } ),
        new Text( new PatternStringProperty( CenterAndVariabilityStrings.rangeCalculationResultPatternStringProperty, {
          range: sceneModel.rangeValueProperty
        } ), { fontSize: 18, visibleProperty: hasEnoughDataProperty, maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH } ),

        new RangeNode( model, sceneModel, playAreaNumberLineNode, {
          parentContext: 'info',
          tandem: options.tandem.createTandem( 'rangeNode' )
        } )
      ]
    } );
  }
}

centerAndVariability.register( 'RangeInfoNode', RangeInfoNode );