// Copyright 2023, University of Colorado Boulder

/**
 * The MedianInfoDialog serves as an information dialog on the Median screen.
 * It primarily encapsulates and presents the MedianInfoNode for the users.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import centerAndVariability from '../../centerAndVariability.js';
import MedianInfoNode from './MedianInfoNode.js';
import MedianModel from '../model/MedianModel.js';
import CAVSoccerSceneModel from '../../common/model/CAVSoccerSceneModel.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import CAVDialog from '../../common/view/CAVDialog.js';

export default class MedianInfoDialog extends CAVDialog {
  public constructor( model: MedianModel, sceneModel: CAVSoccerSceneModel, tandem: Tandem ) {
    const medianInfoNode = new MedianInfoNode( model, sceneModel, tandem.createTandem( 'medianInfoNode' ) );
    super( medianInfoNode, tandem );
  }
}

centerAndVariability.register( 'MedianInfoDialog', MedianInfoDialog );