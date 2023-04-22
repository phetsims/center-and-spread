// Copyright 2022, University of Colorado Boulder

/**
 * Object types for this sim.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Enumeration from '../../../../phet-core/js/Enumeration.js';
import EnumerationValue from '../../../../phet-core/js/EnumerationValue.js';
import centerAndVariability from '../../centerAndVariability.js';

export default class CAVObjectType extends EnumerationValue {
  public readonly radius: number;
  public static readonly DATA_POINT = new CAVObjectType( 1 );
  public static readonly SOCCER_BALL = new CAVObjectType( 0.3 );

  // TODO: This term is confusing because sometimes these are rendered as 'x' marks
  public static readonly DOT = new CAVObjectType( 0.127 );

  public static readonly enumeration = new Enumeration( CAVObjectType );

  public constructor( radius: number ) {
    super();
    this.radius = radius;
  }
}

centerAndVariability.register( 'CAVObjectType', CAVObjectType );