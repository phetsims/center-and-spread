// Copyright 2022, University of Colorado Boulder

/**
 * Model for the "Spread" class.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import optionize from '../../../../phet-core/js/optionize.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import centerAndSpread from '../../centerAndSpread.js';
import { CASModelOptions } from '../../common/model/CASModel.js';
import SoccerModel from '../../common/model/SoccerModel.js';
import CASConstants from '../../common/CASConstants.js';

type SelfOptions = {};
type SpreadModelOptions = SelfOptions & CASModelOptions;

class SpreadModel extends SoccerModel {

  constructor( options: SpreadModelOptions ) {

    options = optionize<SpreadModelOptions, SelfOptions, CASModelOptions>( {
      tandem: Tandem.REQUIRED
    }, options );

    super( CASConstants.NUMBER_OF_OBJECTS_LARGE, options );
  }
}

centerAndSpread.register( 'SpreadModel', SpreadModel );
export default SpreadModel;