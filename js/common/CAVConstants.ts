// Copyright 2022-2023, University of Colorado Boulder

/**
 * Constants used throughout this simulation.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import EnumerationProperty from '../../../axon/js/EnumerationProperty.js';
import PhetFont from '../../../scenery-phet/js/PhetFont.js';
import Tandem from '../../../tandem/js/Tandem.js';
import centerAndVariability from '../centerAndVariability.js';
import CAVQueryParameters from './CAVQueryParameters.js';
import PlotType from './model/PlotType.js';
import ScreenView from '../../../joist/js/ScreenView.js';
import Range from '../../../dot/js/Range.js';
import { Shape } from '../../../kite/js/imports.js';
import NumberProperty from '../../../axon/js/NumberProperty.js';

// Right skewed means most of the data is on the left, see https://github.com/phetsims/center-and-variability/issues/112
const RIGHT_SKEWED_DATA = [
  6, 9, 11, 14, 11,
  8, 6, 5, 5, 5,
  5, 5, 5, 5, 5
];

const NUMBER_LINE_MARGIN_X = 207;

const MAIN_FONT = new PhetFont( 16 );
const CAVConstants = {
  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,
  GRAVITY: -9.8, // in meters/second^2
  MAIN_FONT: MAIN_FONT,
  NUMBER_OF_OBJECTS: 15, // number of objects in the play area on each screen
  CHECKBOX_TEXT_MAX_WIDTH: 107,

  SOCCER_BALL_OVERLAP: 0.045,

  // the top checkboxes are left aligned with the play area checkboxes, so their max width is smaller to accommodate
  // for the accordion box margin
  PLOT_TYPE_PROPERTY: new EnumerationProperty( CAVQueryParameters.plotType === 'dotPlot' ? PlotType.DOT_PLOT : PlotType.LINE_PLOT, {
    tandem: Tandem.PREFERENCES.createTandem( 'plotTypeProperty' )
  } ),
  ARROW_LINE_WIDTH: 0.5,
  RIGHT_SKEWED_DATA: RIGHT_SKEWED_DATA,
  LEFT_SKEWED_DATA: RIGHT_SKEWED_DATA.slice().reverse(),

  CHART_VIEW_WIDTH: ScreenView.DEFAULT_LAYOUT_BOUNDS.width - NUMBER_LINE_MARGIN_X * 2,
  NUMBER_LINE_MARGIN_X: NUMBER_LINE_MARGIN_X,

  INFO_DIALOG_MAX_TEXT_WIDTH: 700,
  INFO_DIALOG_HEADING_BOTTOM_MARGIN: 5,
  INFO_DIALOG_SUBHEADING_BOTTOM_MARGIN: 6,

  CHECKBOX_TEXT_OPTIONS: {
    font: MAIN_FONT,
    maxWidth: 90
  },

  PHYSICAL_RANGE: new Range( 1, 15 ),
  VARIABILITY_DRAG_RANGE: new Range( 0, 16 ),
  MAX_KICKS_VALUES: [ 15, 20, 25, 30 ],
  ACCORDION_BOX_CONTENTS_SHAPE_MEAN_AND_OR_MEDIAN: Shape.rect( 0, 0, 1000, 140 ),
  ACCORDION_BOX_CONTENTS_SHAPE_VARIABILITY: Shape.rect( 0, 0, 940, 140 ),

  MAX_KICKS_PROPERTY: new NumberProperty( CAVQueryParameters.maxKicks, {
    validValues: [ 15, 20, 25, 30 ],
    tandem: Tandem.PREFERENCES.createTandem( 'maxKicksProperty' )
  } ),

  SCENE_VIEW_TANDEM: 'sceneView'
};

centerAndVariability.register( 'CAVConstants', CAVConstants );
export default CAVConstants;