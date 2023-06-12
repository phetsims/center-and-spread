// Copyright 2023, University of Colorado Boulder

/**
 * A subclass of SoccerSceneView that adds the MedianHighlightLayer.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 * @author Matthew Blackman (PhET Interactive Simulations)
 *
 */

import SoccerSceneView from '../../soccer-common/view/SoccerSceneView.js';
import centerAndVariability from '../../centerAndVariability.js';
import MedianHighlightLayer from './MedianHighlightLayer.js';
import CAVModel from '../model/CAVModel.js';
import CAVSceneModel from '../../soccer-common/model/CAVSceneModel.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import SoccerPlayer from '../../soccer-common/model/SoccerPlayer.js';
import { SoccerPlayerImageSet } from '../../soccer-common/view/SoccerPlayerNode.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import Range from '../../../../dot/js/Range.js';


export default class CAVSceneView extends SoccerSceneView {

  public constructor( model: CAVModel,
                      sceneModel: CAVSceneModel,
                      getSoccerPlayerImageSet: ( soccerPlayer: SoccerPlayer, sceneModel: CAVSceneModel ) => SoccerPlayerImageSet,
                      modelViewTransform: ModelViewTransform2,
                      physicalRange: Range,
                      options: { tandem: Tandem } ) {

    super( model.dragIndicatorModel, sceneModel, getSoccerPlayerImageSet, modelViewTransform, physicalRange, options );

    const medianHighlightLayer = new MedianHighlightLayer( sceneModel, modelViewTransform, model.isPlayAreaMedianVisibleProperty, {
      visibleProperty: model.isPlayAreaMedianVisibleProperty
    } );

    this.backSceneViewLayer.addChild( medianHighlightLayer );
  }
}

centerAndVariability.register( 'CAVSceneView', CAVSceneView );