// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import optionize from '../../../../phet-core/js/optionize.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import centerAndSpread from '../../centerAndSpread.js';
import MedianModel from '../model/MedianModel.js';
import { CASScreenViewOptions } from '../../common/view/CASScreenView.js';
import SoccerScreenView from '../../common/view/SoccerScreenView.js';
import CASColors from '../../common/CASColors.js';

type MedianScreenViewOptions = CASScreenViewOptions;

class MedianScreenView extends SoccerScreenView {

  constructor( model: MedianModel, providedOptions: MedianScreenViewOptions ) {

    const options = optionize<MedianScreenViewOptions>( {

      // phet-io options
      tandem: Tandem.REQUIRED,

      questionBarOptions: {
        barFill: CASColors.medianQuestionBarFillColorProperty
      }
    }, providedOptions );

    super( model, options );
  }

  /**
   * Resets the view.
   */
  reset() {
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  step( dt: number ) {
  }
}

centerAndSpread.register( 'MedianScreenView', MedianScreenView );
export default MedianScreenView;