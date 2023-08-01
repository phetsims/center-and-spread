// Copyright 2023, University of Colorado Boulder

/**
 * Info Dialog for the Mean and Median Screen. Creates a MeanAndMedianInfoNode
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import centerAndVariability from '../../centerAndVariability.js';
import Dialog from '../../../../sun/js/Dialog.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import NumberLineNode from '../../soccer-common/view/NumberLineNode.js';
import CAVSoccerSceneModel from '../../common/model/CAVSoccerSceneModel.js';
import MeanAndMedianInfoNode from './MeanAndMedianInfoNode.js';
import MeanAndMedianModel from '../model/MeanAndMedianModel.js';

export default class MeanAndMedianInfoDialog extends Dialog {
  public constructor( model: MeanAndMedianModel, sceneModel: CAVSoccerSceneModel, playAreaNumberLineNode: NumberLineNode, options: PickRequired<PhetioObjectOptions, 'tandem'> ) {

    const meanAndMedianInfoNode = new MeanAndMedianInfoNode( model, sceneModel, playAreaNumberLineNode, { tandem: options.tandem.createTandem( 'meanAndMedianInfoNode' ) } );

    super( meanAndMedianInfoNode, {
      tandem: options.tandem
    } );
  }
}

centerAndVariability.register( 'MeanAndMedianInfoDialog', MeanAndMedianInfoDialog );