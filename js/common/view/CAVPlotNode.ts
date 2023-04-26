// Copyright 2022-2023, University of Colorado Boulder

/**
 * Shows the dot plot or line plot on the "Mean & Median" Screen, including the legends/readouts to the left.
 * The plot is non-interactive.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import centerAndVariability from '../../centerAndVariability.js';
import { Node, NodeOptions, Rectangle, TColor, Text } from '../../../../scenery/js/imports.js';
import optionize from '../../../../phet-core/js/optionize.js';
import CAVModel from '../model/CAVModel.js';
import CAVObject from '../model/CAVObject.js';
import PhetioGroup from '../../../../tandem/js/PhetioGroup.js';
import CAVObjectNode from './CAVObjectNode.js';
import CAVObjectType from '../model/CAVObjectType.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import NumberLineNode from './NumberLineNode.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import CenterAndVariabilityStrings from '../../CenterAndVariabilityStrings.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import CAVConstants from '../CAVConstants.js';

type SelfOptions = {
  dataPointFill: TColor;
};
export type CAVPlotOptions = SelfOptions & NodeOptions & PickRequired<NodeOptions, 'tandem'>;

export default class CAVPlotNode extends Node {

  private readonly dotLayer = new Node();
  protected readonly modelViewTransform: ModelViewTransform2;

  public constructor( model: CAVModel, providedOptions?: CAVPlotOptions ) {

    const options = optionize<CAVPlotOptions, SelfOptions, NodeOptions>()( {}, providedOptions );

    super( options );

    // TODO: Factor out height with accordion box height
    const backgroundNode = new Rectangle( 0, 0, CAVConstants.CHART_VIEW_WIDTH, 180 );
    this.addChild( backgroundNode );

    const numberLinePositionY = 127;

    // scale down in the y direction to support smaller object nodes
    const yScale = CAVObjectType.DATA_POINT.radius / CAVObjectType.SOCCER_BALL.radius;

    // TODO: we currently define the y range with the x width because we are thinking of it as a square, with a stack of
    //  15 balls as the high point. Consider instead something like above, where we just base the y scaling on the height
    // of one ball.
    const modelViewTransform = ModelViewTransform2.createRectangleInvertedYMapping(
      new Bounds2( model.physicalRange.min, 0, model.physicalRange.max, model.physicalRange.getLength() ),
      new Bounds2( 0, numberLinePositionY - CAVConstants.CHART_VIEW_WIDTH * yScale, 0 + CAVConstants.CHART_VIEW_WIDTH, numberLinePositionY )
    );
    this.modelViewTransform = modelViewTransform;

    const numberLineNode = new NumberLineNode(
      model.physicalRange,
      model.meanValueProperty,
      model.isShowingTopMeanProperty,
      model.dataRangeProperty, {
        color: 'black',
        includeXAxis: true,
        includeMeanStroke: false,
        tandem: options.tandem.createTandem( 'numberLineNode' ),
        y: numberLinePositionY
      } );
    backgroundNode.addChild( numberLineNode );

    backgroundNode.addChild( new Text( CenterAndVariabilityStrings.distanceInMetersStringProperty, {

      // TODO-UX: This may be asymmetrical if it accounts for edge labels
      centerX: numberLineNode.centerX,
      top: numberLineNode.bottom + 2,
      font: new PhetFont( 13 )
    } ) );
    backgroundNode.addChild( this.dotLayer );

    // TODO: This overlaps with draggingEnabled
    const dotPlotObjectNodesDraggableProperty = new BooleanProperty( false );

    const dotNodeGroup = new PhetioGroup<CAVObjectNode, [ CAVObject ]>( ( tandem, cavObject ) => {
      return new CAVObjectNode( cavObject, model.isShowingTopMedianProperty, modelViewTransform, dotPlotObjectNodesDraggableProperty, {
        objectViewType: CAVObjectType.DATA_POINT,
        draggingEnabled: false,
        tandem: tandem,
        fill: options.dataPointFill
      } );
    }, () => [ model.objectGroup.archetype ], {
      phetioType: PhetioGroup.PhetioGroupIO( Node.NodeIO ),
      tandem: options.tandem.createTandem( 'dotNodeGroup' ),
      supportsDynamicState: false
    } );

    const map = new Map<CAVObject, CAVObjectNode>();

    const createDotNode = ( cavObject: CAVObject ) => {
      const dotNode = dotNodeGroup.createCorrespondingGroupElement( cavObject.tandem.name, cavObject );

      cavObject.valueProperty.link( value => {
        dotNode.setVisible( value !== null );
        if ( value !== null && !this.dotLayer.hasChild( dotNode ) ) {
          this.dotLayer.addChild( dotNode );
        }
      } );
      map.set( cavObject, dotNode );
    };
    model.objectGroup.forEach( createDotNode );
    model.objectGroup.elementCreatedEmitter.addListener( createDotNode );

    model.objectGroup.elementDisposedEmitter.addListener( cavObject => {
      const viewNode = map.get( cavObject )!;
      dotNodeGroup.disposeElement( viewNode );
      map.delete( cavObject );
    } );
  }

  public reset(): void {
    // No implementation because this node is powered by the model. Reset needed for uniformity with CardNodeContainer.
  }
}

centerAndVariability.register( 'CAVPlotNode', CAVPlotNode );