// Copyright 2022, University of Colorado Boulder

/**
 * Constants used throughout this simulation.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import EnumerationProperty from '../../../axon/js/EnumerationProperty.js';
import PhetFont from '../../../scenery-phet/js/PhetFont.js';
import Tandem from '../../../tandem/js/Tandem.js';
import centerAndSpread from '../centerAndSpread.js';
import CASQueryParameters from './CASQueryParameters.js';
import PlotType from './model/PlotType.js';

const CASConstants = {
  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,
  GRAVITY: -9.8, // in meters/second^2
  BUTTON_FONT: new PhetFont( 16 ),
  NUMBER_OF_OBJECTS_SMALL: 15, // the number of objects used on the Median and Mean & Median screens
  NUMBER_OF_OBJECTS_LARGE: 20, // the number of objects used on the Spread and Lab screens
  CHECKBOX_TEXT_MAX_WIDTH: 120,

  // TODO: Should this be declared in main and passed through?
  // SR: I prefer that it is treated like a global.  But in other sims I've advocated for passing it through.  But here,
  // SR: I tried passing it through and it got ugly because it had to be passed to places that seem like they shouldn't need it
  // SR: Maybe we should ask dev team?
  PLOT_TYPE_PROPERTY: new EnumerationProperty( CASQueryParameters.plotType === 'dotPlot' ? PlotType.DOT_PLOT : PlotType.LINE_PLOT, {
    tandem: Tandem.GLOBAL_VIEW.createTandem( 'plotTypeProperty' )
  } ),
  ARROW_LINE_WIDTH: 0.5
};

centerAndSpread.register( 'CASConstants', CASConstants );
export default CASConstants;