// Copyright 2023, University of Colorado Boulder

/**
 * MeanAndMedianInfoDialog is a UI component for the Mean and Median Screen. It provides a dialog that displays
 * detailed information using the MeanAndMedianInfoNode. The dialog leverages information from the provided
 * model, scene model, and a number line node.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import centerAndVariability from '../../centerAndVariability.js';
import NumberLineNode from '../../../../soccer-common/js/view/NumberLineNode.js';
import CAVSoccerSceneModel from '../../common/model/CAVSoccerSceneModel.js';
import MeanAndMedianInfoNode from './MeanAndMedianInfoNode.js';
import MeanAndMedianModel from '../model/MeanAndMedianModel.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import CAVDialog from '../../common/view/CAVDialog.js';

export default class MeanAndMedianInfoDialog extends CAVDialog {
  public constructor( model: MeanAndMedianModel, sceneModel: CAVSoccerSceneModel, playAreaNumberLineNode: NumberLineNode, tandem: Tandem ) {

    const meanAndMedianInfoNode = new MeanAndMedianInfoNode(
      model,
      sceneModel,
      playAreaNumberLineNode,
      tandem.createTandem( 'meanAndMedianInfoNode' )
    );

    super( meanAndMedianInfoNode, tandem );
  }
}

centerAndVariability.register( 'MeanAndMedianInfoDialog', MeanAndMedianInfoDialog );