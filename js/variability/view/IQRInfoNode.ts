// Copyright 2023, University of Colorado Boulder

import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import { RichText, Text, VBox } from '../../../../scenery/js/imports.js';
import CenterAndVariabilityStrings from '../../CenterAndVariabilityStrings.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import VariabilityModel from '../model/VariabilityModel.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import centerAndVariability from '../../centerAndVariability.js';
import CAVConstants from '../../common/CAVConstants.js';
import IQRNode from './IQRNode.js';
import VariabilitySceneModel from '../model/VariabilitySceneModel.js';
import NumberLineNode from '../../soccer-common/view/NumberLineNode.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import IQRInfoValuesNode from './IQRInfoValuesNode.js';
import { PLOT_NODE_TOP_MARGIN } from '../../common/view/CAVPlotNode.js';

export default class IQRInfoNode extends VBox {
  public constructor( model: VariabilityModel, sceneModel: VariabilitySceneModel, playAreaNumberLineNode: NumberLineNode, options: PickRequired<PhetioObjectOptions, 'tandem'> ) {

    const hasEnoughDataForIQRProperty = new DerivedProperty( [ sceneModel.numberOfDataPointsProperty ], numberOfDataPoints => numberOfDataPoints >= 5 );

    const iqrInfoValuesNode = new IQRInfoValuesNode( sceneModel, hasEnoughDataForIQRProperty );

    super( {
      align: 'left',
      children: [
        new RichText( CenterAndVariabilityStrings.iqrDescriptionStringProperty, {
          font: new PhetFont( CAVConstants.INFO_DIALOG_TITLE_FONT_SIZE ),
          maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH,
          layoutOptions: { bottomMargin: CAVConstants.INFO_DIALOG_SUBHEADING_BOTTOM_MARGIN }
        } ),

        iqrInfoValuesNode,

        new Text( new PatternStringProperty( CenterAndVariabilityStrings.iqrCalculationPattern1StringProperty, {
          q1: sceneModel.q1ValueProperty,
          q3: sceneModel.q3ValueProperty
        }, {
          maps: {
            q1: CAVConstants.STRING_VALUE_NULL_MAP,
            q3: CAVConstants.STRING_VALUE_NULL_MAP
          },
          tandem: options.tandem.createTandem( 'iqrCalculation1StringProperty' )
        } ), {
          fontSize: CAVConstants.INFO_DIALOG_FONT_SIZE,
          visibleProperty: hasEnoughDataForIQRProperty,
          maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH,
          layoutOptions: { topMargin: 5 }
        } ),

        new Text( new PatternStringProperty( CenterAndVariabilityStrings.iqrCalculationPattern2StringProperty, {
          iqr: sceneModel.iqrValueProperty
        }, {
          maps: {
            iqr: CAVConstants.STRING_VALUE_NULL_MAP
          },
          tandem: options.tandem.createTandem( 'iqrCalculation2StringProperty' )
        } ), {
          fontSize: CAVConstants.INFO_DIALOG_FONT_SIZE,
          visibleProperty: hasEnoughDataForIQRProperty,
          maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH,
          layoutOptions: { topMargin: 5 }
        } ),

        new IQRNode( model, sceneModel, playAreaNumberLineNode, {
          parentContext: 'info',
          tandem: options.tandem.createTandem( 'iqrNode' ),
          layoutOptions: { topMargin: PLOT_NODE_TOP_MARGIN }
        } )
      ]
    } );

    const updateDataValuesDisplay = () => {

      // We only need to update the data display if the info box is showing.
      // This is for performance improvements on reset.
      if ( !model.isInfoVisibleProperty.value ) {
        return;
      }

      iqrInfoValuesNode.update();
    };

    sceneModel.objectChangedEmitter.addListener( updateDataValuesDisplay );
    sceneModel.numberOfDataPointsProperty.lazyLink( updateDataValuesDisplay );
    model.isInfoVisibleProperty.lazyLink( updateDataValuesDisplay );

    updateDataValuesDisplay();
  }
}

centerAndVariability.register( 'IQRInfoNode', IQRInfoNode );
