// Copyright 2023, University of Colorado Boulder

/**
 * Help content for the KeyboardHelpDialog for moving the Predict Median.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import KeyboardHelpIconFactory from '../../../../scenery-phet/js/keyboard/help/KeyboardHelpIconFactory.js';
import KeyboardHelpSection from '../../../../scenery-phet/js/keyboard/help/KeyboardHelpSection.js';
import KeyboardHelpSectionRow from '../../../../scenery-phet/js/keyboard/help/KeyboardHelpSectionRow.js';
import centerAndVariability from '../../centerAndVariability.js';
import TextKeyNode from '../../../../scenery-phet/js/keyboard/TextKeyNode.js';

export default class MedianKeyboardHelpPredictMedianSection extends KeyboardHelpSection {
  public constructor() {
    super( 'Predict Median', [
      KeyboardHelpSectionRow.labelWithIcon( 'Move predict median',
        KeyboardHelpIconFactory.iconOrIcon(
          KeyboardHelpIconFactory.leftRightArrowKeysRowIcon(),
          KeyboardHelpIconFactory.upDownArrowKeysRowIcon()
        ) ), KeyboardHelpSectionRow.labelWithIcon(
        'Move in larger steps',
        KeyboardHelpIconFactory.pageUpPageDownRowIcon()
      ), KeyboardHelpSectionRow.labelWithIcon(
        'Jump to start of number line',
        TextKeyNode.home(), { labelOptions: { lineWrap: 200 } }
      ), KeyboardHelpSectionRow.labelWithIcon(
        'Jump to end of number line',
        TextKeyNode.end(), { labelOptions: { lineWrap: 200 } }
      ) ] );
  }
}

centerAndVariability.register( 'MedianKeyboardHelpPredictMedianSection', MedianKeyboardHelpPredictMedianSection );