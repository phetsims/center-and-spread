// Copyright 2023, University of Colorado Boulder

/**
 * NeedAtLeastNKicksText is a text UI component designed for accordion boxes and info dialogs.
 * It conveys a message to the user indicating that a minimum amount of data (or kicks) is
 * required to calculate a specific statistic.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import centerAndVariability from '../../centerAndVariability.js';
import { Text, TextOptions } from '../../../../scenery/js/imports.js';
import CAVConstants from '../CAVConstants.js';
import LocalizedStringProperty from '../../../../chipper/js/LocalizedStringProperty.js';
import { combineOptions } from '../../../../phet-core/js/optionize.js';

export default class NeedAtLeastNKicksText extends Text {

  public constructor( stringProperty: LocalizedStringProperty, providedOptions?: TextOptions ) {
    super( stringProperty, combineOptions<TextOptions>( {
      fontSize: 18,
      maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH
    }, providedOptions ) );
  }
}

centerAndVariability.register( 'NeedAtLeastNKicksText', NeedAtLeastNKicksText );