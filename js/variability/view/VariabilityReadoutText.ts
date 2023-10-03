// Copyright 2023, University of Colorado Boulder

/**
 * VariabilityReadoutText shows the readouts on the left of the dot plot in the Variability screen accordion box.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import centerAndVariability from '../../centerAndVariability.js';
import { Text, TextOptions } from '../../../../scenery/js/imports.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import TReadOnlyProperty from '../../../../axon/js/TReadOnlyProperty.js';

type SelfOptions = EmptySelfOptions;
export type ValueReadoutTextOptions = SelfOptions & TextOptions;

export default class VariabilityReadoutText extends Text {

  public constructor( stringProperty: TReadOnlyProperty<string>, providedOptions: ValueReadoutTextOptions ) {

    const options = optionize<ValueReadoutTextOptions, SelfOptions, TextOptions>()( {
      font: new PhetFont( 16 ),
      maxWidth: 100,
      isDisposable: false
    }, providedOptions );

    super( stringProperty, options );
  }
}

centerAndVariability.register( 'VariabilityReadoutText', VariabilityReadoutText );