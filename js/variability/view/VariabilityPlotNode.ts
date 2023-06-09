// Copyright 2023, University of Colorado Boulder

/**
 * Shows the dot plot or line plot on the "Mean & Median" Screen, including the legends/readouts to the left.
 * The plot is non-interactive.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import centerAndVariability from '../../centerAndVariability.js';
import { Node, NodeOptions } from '../../../../scenery/js/imports.js';
import Property from '../../../../axon/js/Property.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import VariabilityModel from '../model/VariabilityModel.js';
import RangeNode from './RangeNode.js';
import IQRNode from './IQRNode.js';
import MADNode from './MADNode.js';
import VariabilityMeasure from '../model/VariabilityMeasure.js';
import ToggleNode from '../../../../sun/js/ToggleNode.js';
import VariabilitySceneModel from '../model/VariabilitySceneModel.js';
import CAVPlotNode from '../../common/view/CAVPlotNode.js';
import IntervalToolPlayAreaNode from './IntervalToolPlayAreaNode.js';
import NumberLineNode from '../../soccer-common/view/NumberLineNode.js';

export type CAVPlotOptions = NodeOptions & PickRequired<NodeOptions, 'tandem'>;

export default class VariabilityPlotNode extends Node {
  private toggleNode: ToggleNode<VariabilityMeasure, CAVPlotNode>;

  public constructor( model: VariabilityModel, sceneModel: VariabilitySceneModel, playAreaNumberLineNode: NumberLineNode, providedOptions: CAVPlotOptions ) {
    super( providedOptions );

    // We need to specify CAVPlotNode manually because otherwise TypeScript will infer all Nodes as the first element (RangeNode), see https://github.com/phetsims/sun/issues/846
    const toggleNode = new ToggleNode<VariabilityMeasure, CAVPlotNode>( model.selectedVariabilityMeasureProperty, [ {
      createNode: tandem => new RangeNode( model, sceneModel, playAreaNumberLineNode, {
        parentContext: 'accordion',
        tandem: tandem.createTandem( 'rangeNode' )
      } ),
      tandemName: 'rangeNode',
      value: VariabilityMeasure.RANGE
    }, {
      createNode: tandem => new IQRNode( model, sceneModel, playAreaNumberLineNode, {
        parentContext: 'accordion',
        tandem: tandem.createTandem( 'iqrNode' )
      } ),
      tandemName: 'iqrNode',
      value: VariabilityMeasure.IQR
    }, {
      createNode: tandem => new MADNode( model, sceneModel, playAreaNumberLineNode, {
        parentContext: 'accordion',
        tandem: tandem.createTandem( 'madNode' )
      } ),
      tandemName: 'madNode',
      value: VariabilityMeasure.MAD
    } ], {
      tandem: providedOptions.tandem.createTandem( 'toggleNode' ),
      alignChildren: ToggleNode.NONE
    } );
    this.addChild( toggleNode );
    toggleNode.moveToBack();

    this.toggleNode = toggleNode;

    const intervalToolPlayAreaNode = new IntervalToolPlayAreaNode( model.intervalTool1ValueProperty,
      model.intervalTool2ValueProperty, toggleNode.nodes[ 0 ].modelViewTransform, new Property( 0 ), {
        visibleProperty: model.isIntervalToolVisibleProperty,
        tandem: providedOptions.tandem.createTandem( 'intervalToolPlayAreaNode' )
      } );

    toggleNode.nodes.forEach( node => node.insertChild( 0, intervalToolPlayAreaNode ) );
  }
}

centerAndVariability.register( 'VariabilityPlotNode', VariabilityPlotNode );