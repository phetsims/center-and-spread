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
import centerAndSpreadStrings from '../../centerAndSpreadStrings.js';
import CASAccordionBox from '../../common/view/CASAccordionBox.js';
import CASConstants from '../../common/CASConstants.js';
import NumberCardContainer from '../../common/view/NumberCardContainer.js';

type MedianScreenViewOptions = CASScreenViewOptions;

class MedianScreenView extends SoccerScreenView {
  readonly dataAccordionBox: CASAccordionBox;

  constructor( model: MedianModel, providedOptions: MedianScreenViewOptions ) {

    const options = optionize<MedianScreenViewOptions>( {
      questionBarOptions: {
        barFill: CASColors.medianQuestionBarFillColorProperty,
        labelText: centerAndSpreadStrings.medianQuestion
      },
      tandem: Tandem.REQUIRED
    }, providedOptions );

    super( model, options );

    // TODO: CK - float to top of visibleBounds to certain aspect ratio
    this.dataAccordionBox = new CASAccordionBox( new NumberCardContainer( this.model ), this.layoutBounds, {
      tandem: options.tandem.createTandem( 'casAccordionBox' ),
      titleString: centerAndSpreadStrings.data,
      centerX: this.layoutBounds.centerX,
      top: this.questionBar.bottom + CASConstants.SCREEN_VIEW_Y_MARGIN
    } );
    this.addChild( this.dataAccordionBox );

    this.addChild( this.objectsLayer );
  }

  reset() {
    super.reset();
    this.dataAccordionBox.reset();
  }
}

centerAndSpread.register( 'MedianScreenView', MedianScreenView );
export default MedianScreenView;