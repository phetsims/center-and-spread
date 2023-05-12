// Copyright 2023, University of Colorado Boulder

import centerAndVariability from '../../centerAndVariability.js';
import { Line, Node, Rectangle } from '../../../../scenery/js/imports.js';
import ArrowNode from '../../../../scenery-phet/js/ArrowNode.js';

/**
 * Icon for the PurpleArrow radio button.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

export default class MADIconNode extends Node {
  public constructor() {

    // Main background rectangle
    const rectangle = new Rectangle( 0, 0, 40, 40, {
      fill: '#bb89ec',
      cornerRadius: 4
    } );

    // Vertical line
    const verticalLine = new Line( rectangle.centerX, rectangle.top + 4, rectangle.centerX, rectangle.bottom - 4, {
      stroke: 'black',
      lineWidth: 1
    } );

    // Horizontal double-headed arrows on the left and right side
    const arrowOptions = {
      doubleHead: true,
      fill: 'black',
      stroke: null,
      headWidth: 5,
      headHeight: 5,
      tailWidth: 1.2,
      centerY: rectangle.centerY
    };
    const arrowLeft = new ArrowNode( rectangle.centerX, 0, rectangle.centerX - rectangle.width / 2 * 0.92, 0, arrowOptions );
    const arrowRight = new ArrowNode( rectangle.centerX, 0, rectangle.centerX + rectangle.width / 2 * 0.92, 0, arrowOptions );

    super( {
      children: [
        rectangle,
        verticalLine,
        arrowLeft,
        arrowRight
      ]
    } );
  }
}

centerAndVariability.register( 'MADIconNode', MADIconNode );
