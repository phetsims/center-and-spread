// Copyright 2022, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */

import centerAndSpread from '../centerAndSpread.js';

const CASQueryParameters = QueryStringMachine.getAll( {

  // TODO: It would be nice if QueryStringMachine supported mapping to EnumerationValue
  // TODO: Or should we bring back StringEnumerationProperty in https://github.com/phetsims/axon/issues/373?
  plotType: {
    type: 'string',
    validValues: [ 'dotPlot', 'linePlot' ],
    defaultValue: 'linePlot',
    public: true
  }
} );

centerAndSpread.register( 'CASQueryParameters', CASQueryParameters );
export default CASQueryParameters;