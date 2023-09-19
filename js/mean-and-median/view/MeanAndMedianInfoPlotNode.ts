// Copyright 2023, University of Colorado Boulder

/**
 * MeanAndMedianInfoPlotNode is a specialized graphical node that represents data on the "Mean and Median Screen".
 * Apart from showcasing the plot points, it also includes visual indicators for both the mean and median values.
 * The node visually represents the median value with an arrow and the mean value with an indicator.
 * The position and visibility of these elements are dynamically updated based on changes in the underlying model data.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import MeanAndMedianPlotNode, { MeanAndMedianPlotNodeOptions } from './MeanAndMedianPlotNode.js';
import centerAndVariability from '../../centerAndVariability.js';
import MeanAndMedianModel from '../model/MeanAndMedianModel.js';
import CAVSoccerSceneModel from '../../common/model/CAVSoccerSceneModel.js';
import NumberLineNode from '../../../../soccer-common/js/view/NumberLineNode.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import StrictOmit from '../../../../phet-core/js/types/StrictOmit.js';
import ArrowNode from '../../../../scenery-phet/js/ArrowNode.js';
import CAVColors from '../../common/CAVColors.js';
import MedianBarNode from '../../common/view/MedianBarNode.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import { DATA_POINT_SCALE_PROPERTY } from '../../common/CAVConstants.js';
import MeanIndicatorNode from '../../common/view/MeanIndicatorNode.js';


type MeanAndMedianInfoPlotNodeOptions = StrictOmit<MeanAndMedianPlotNodeOptions, 'parentContext' | 'dataPointFill'> & EmptySelfOptions;

export default class MeanAndMedianInfoPlotNode extends MeanAndMedianPlotNode {
  public constructor( model: MeanAndMedianModel, sceneModel: CAVSoccerSceneModel, playAreaNumberLine: NumberLineNode, providedOptions: MeanAndMedianInfoPlotNodeOptions ) {
    const options = optionize<MeanAndMedianInfoPlotNodeOptions, EmptySelfOptions, MeanAndMedianPlotNodeOptions>()( {
      parentContext: 'info',
      dataPointFill: CAVColors.meanAndMedianDataPointFill,
      isMeanAndMedianInfoPlot: true
    }, providedOptions );

    super( model, sceneModel, playAreaNumberLine, model.isDataPointLayerVisibleProperty, options );

    const modelViewTransfrom = this.modelViewTransform;

    const medianArrowNode = new ArrowNode( 0, 0, 0, MedianBarNode.NOTCH_HEIGHT + 5, {
      headHeight: 8,
      headWidth: 9,
      tailWidth: MedianBarNode.LINE_WIDTH,
      fill: CAVColors.medianColorProperty,
      stroke: null,
      visible: false
    } );

    this.addChild( medianArrowNode );
    const updateMedianArrow = () => {
      const medianValue = sceneModel.medianValueProperty.value;

      if ( medianValue !== null ) {

        const medianArrowYPosition = sceneModel.getDataValues().includes( medianValue )
                                     ? sceneModel.getStackAtValue( medianValue )[ sceneModel.getStackAtValue( medianValue ).length - 1 ].positionProperty.value.y : 0;
        const x = modelViewTransfrom.modelToViewX( medianValue );
        const scale = DATA_POINT_SCALE_PROPERTY.value;
        const y = modelViewTransfrom.modelToViewY( medianArrowYPosition * scale );
        const dataPointRadius = medianArrowYPosition === 0 ? 0 : modelViewTransfrom.modelToViewDeltaY( scale / 2 );
        medianArrowNode.centerBottom = new Vector2( x, y + dataPointRadius );
        medianArrowNode.visible = true;
      }
      else {
        medianArrowNode.visible = false;
      }

    };

    const meanIndicatorNode = new MeanIndicatorNode( false, false );
    this.addChild( meanIndicatorNode );

    const updateMeanIndicatorNode = () => {
      const meanValue = sceneModel.meanValueProperty.value;
      if ( meanValue !== null ) {
        meanIndicatorNode.centerTop = modelViewTransfrom.modelToViewXY( meanValue, 0 );
        meanIndicatorNode.visible = true;
      }
      else {
        meanIndicatorNode.visible = false;
      }
    };

    sceneModel.objectChangedEmitter.addListener( updateMedianArrow );
    sceneModel.medianValueProperty.link( updateMedianArrow );
    sceneModel.meanValueProperty.link( updateMeanIndicatorNode );
  }

}

centerAndVariability.register( 'MeanAndMedianInfoPlotNode', MeanAndMedianInfoPlotNode );