// Copyright 2022-2023, University of Colorado Boulder

/**
 * Screen for the "Lab"
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import optionize, { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import CAVColors from '../common/CAVColors.js';
import centerAndVariability from '../centerAndVariability.js';
import LabModel from './model/LabModel.js';
import CAVScreen, { CAVScreenOptions } from '../common/CAVScreen.js';
import LabScreenView from './view/LabScreenView.js';
import CenterAndVariabilityStrings from '../CenterAndVariabilityStrings.js';

type LabScreenOptions = CAVScreenOptions;

class LabScreen extends CAVScreen<LabModel, LabScreenView> {

  public constructor( providedOptions: LabScreenOptions ) {

    const options = optionize<LabScreenOptions, EmptySelfOptions, CAVScreenOptions>()( {
      name: CenterAndVariabilityStrings.screen.labStringProperty,
      backgroundColorProperty: CAVColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new LabModel( {
        includeCards: true,
        tandem: options.tandem.createTandem( 'model' ),
        instrumentMeanPredictionProperty: true
      } ),
      model => new LabScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

centerAndVariability.register( 'LabScreen', LabScreen );
export default LabScreen;