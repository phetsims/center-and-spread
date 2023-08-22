// Copyright 2023, University of Colorado Boulder

/**
 * Renders a horizontal line with short vertical drop lines on each end, to indicate some interval over data.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import centerAndVariability from '../../centerAndVariability.js';
import { Path, PathOptions } from '../../../../scenery/js/imports.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import { Shape } from '../../../../kite/js/imports.js';
import Vector2 from '../../../../dot/js/Vector2.js';

type SelfOptions = EmptySelfOptions;
export type MedianBarNodeOptions = SelfOptions & PathOptions;

export default class IntervalBarNode extends Path {
  private intervalBarNodeWidth: number;

  public constructor( providedOptions?: MedianBarNodeOptions ) {

    const options = optionize<MedianBarNodeOptions, SelfOptions, PathOptions>()( {
      stroke: 'black',
      lineWidth: 1,
      isDisposable: false
    }, providedOptions );

    super( null, options );
    this.intervalBarNodeWidth = 0;
    this.updateShape();
  }

  public setIntervalBarNodeWidth( intervalBarNodeWidth: number ): void {
    this.intervalBarNodeWidth = intervalBarNodeWidth;
    this.updateShape();
  }

  public updateShape(): void {
    const shape = new Shape();

    // The length of the lines that extend perpendicularly from the ends of the bar
    const DROP_LINE_LENGTH = 6;

    const leftCorner = new Vector2( 0, 0 );
    const rightCorner = new Vector2( this.intervalBarNodeWidth, 0 );
    const leftDropPoint = new Vector2( 0, DROP_LINE_LENGTH );
    const rightDropPoint = new Vector2( this.intervalBarNodeWidth, DROP_LINE_LENGTH );

    shape.moveToPoint( leftDropPoint );
    shape.lineToPoint( leftCorner );
    shape.lineToPoint( rightCorner );
    shape.lineToPoint( rightDropPoint );

    this.shape = shape;
  }
}

centerAndVariability.register( 'IntervalBarNode', IntervalBarNode );