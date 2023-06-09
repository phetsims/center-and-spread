// Copyright 2023, University of Colorado Boulder

/**
 * RangeNode overlays a range indicator on the plot. It is used in both the accordion and info views.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import MedianBarNode from '../../common/view/MedianBarNode.js';
import { ManualConstraint, Rectangle, Text } from '../../../../scenery/js/imports.js';
import centerAndVariability from '../../centerAndVariability.js';
import VariabilityModel from '../model/VariabilityModel.js';
import CenterAndVariabilityStrings from '../../CenterAndVariabilityStrings.js';
import CAVPlotNode, { CAVPlotNodeOptions, MIN_KICKS_TEXT_OFFSET, MIN_KICKS_TEXT_TOP_MARGIN } from '../../common/view/CAVPlotNode.js';
import CAVObjectType from '../../soccer-common/model/CAVObjectType.js';
import StrictOmit from '../../../../phet-core/js/types/StrictOmit.js';
import CAVConstants from '../../common/CAVConstants.js';
import CAVColors from '../../common/CAVColors.js';
import VariabilitySceneModel from '../model/VariabilitySceneModel.js';
import optionize from '../../../../phet-core/js/optionize.js';
import NumberLineNode from '../../soccer-common/view/NumberLineNode.js';
import SoccerBall from '../../soccer-common/model/SoccerBall.js';

type SelfOptions = {
  parentContext: 'accordion' | 'info';
};
type RangeNodeOptions = SelfOptions & StrictOmit<CAVPlotNodeOptions, 'dataPointFill'>;

export default class RangeNode extends CAVPlotNode {
  public constructor( model: VariabilityModel, sceneModel: VariabilitySceneModel, playAreaNumberLineNode: NumberLineNode, providedOptions: RangeNodeOptions ) {

    const options = optionize<RangeNodeOptions, SelfOptions, CAVPlotNodeOptions>()( {
      dataPointFill: CAVColors.grayDataPointFill
    }, providedOptions );

    super( model, sceneModel, playAreaNumberLineNode, options );

    const needAtLeastOneKickText = new Text( CenterAndVariabilityStrings.needAtLeastOneKickStringProperty, {
      fontSize: 18,
      maxWidth: CAVConstants.INFO_DIALOG_MAX_TEXT_WIDTH,
      layoutOptions: { topMargin: MIN_KICKS_TEXT_TOP_MARGIN }
    } );

    ManualConstraint.create( this, [ needAtLeastOneKickText ], textProxy => {
      needAtLeastOneKickText.center = this.modelViewTransform.modelToViewXY( CAVConstants.PHYSICAL_RANGE.getCenter(), MIN_KICKS_TEXT_OFFSET );
    } );
    this.addChild( needAtLeastOneKickText );

    // This adds a top margin to the text, separating it from the info dialog subheading
    needAtLeastOneKickText.localBounds = needAtLeastOneKickText.localBounds.dilatedY( MIN_KICKS_TEXT_TOP_MARGIN );

    const rangeTextReadout = new Text( '', {
      font: CAVConstants.VARIABILITY_MEASURE_NUMBER_READOUT_FONT
    } );

    const rangeBar = new MedianBarNode( {
      notchDirection: 'down',
      barStyle: 'continuous',
      stroke: 'black',
      lineWidth: 1
    } );
    const rectangleHeight = 70;
    const rangeRectangle = new Rectangle( 0, 50, 100, rectangleHeight, {
      fill: CAVColors.rangeFillProperty
    } );
    this.addChild( rangeBar );
    this.addChild( rangeRectangle );
    this.addChild( rangeTextReadout );

    const updateRangeNode = () => {

      const sortedDots = sceneModel.getSortedLandedObjects();

      const leftmostDot = sortedDots[ 0 ] as SoccerBall | undefined;
      const rightmostDot = sortedDots[ sortedDots.length - 1 ] as SoccerBall | undefined;

      // Only redraw the shape if the feature is selected and the data is sorted, and there is at least one card
      const hasNonZeroRange = !!leftmostDot &&
                              !!rightmostDot &&
                              leftmostDot.valueProperty.value !== rightmostDot.valueProperty.value;
      if ( hasNonZeroRange ) {
        const left = this.modelViewTransform.modelToViewX( leftmostDot.valueProperty.value! );
        const right = this.modelViewTransform.modelToViewX( rightmostDot.valueProperty.value! );
        const highestYValue = this.modelViewTransform.modelToViewY(
          _.maxBy( sortedDots, dot => dot.positionProperty.value.y )!.positionProperty.value.y );


        const floor = this.modelViewTransform.modelToViewY( 0 );

        if ( options.parentContext === 'info' ) {
          rangeRectangle.rectHeight = floor - highestYValue + this.modelViewTransform.modelToViewDeltaX( CAVObjectType.DATA_POINT.radius ) + 3;
        }
        rangeRectangle.rectWidth = right - left;
        rangeRectangle.left = left;
        rangeRectangle.bottom = floor;

        rangeBar.setMedianBarShape( rangeRectangle.top - MedianBarNode.NOTCH_HEIGHT - 2, rangeRectangle.left, 0, rangeRectangle.right, false );

        rangeTextReadout.string = sceneModel.rangeValueProperty.value + '';
        rangeTextReadout.centerX = rangeRectangle.centerX;
        rangeTextReadout.bottom = rangeBar.top - 5;
      }
      const rangeVisibility = ( options.parentContext === 'info' && hasNonZeroRange ) ||
                              ( options.parentContext === 'accordion' && hasNonZeroRange && model.isRangeVisibleProperty.value );
      rangeRectangle.visible = rangeVisibility;
      rangeBar.visible = rangeVisibility;
      rangeTextReadout.visible = rangeVisibility;
      needAtLeastOneKickText.visible = sceneModel.numberOfDataPointsProperty.value === 0 && ( options.parentContext === 'info' ||
                                                                                              ( options.parentContext === 'accordion' && model.isRangeVisibleProperty.value ) );
    };

    model.isRangeVisibleProperty.link( updateRangeNode );
    model.selectedVariabilityMeasureProperty.link( updateRangeNode );

    // It's important to avoid inconsistent intermediate states during the updateDataMeasures calculation, so we
    // only update once it's complete
    sceneModel.variabilityDataMeasuresUpdatedEmitter.addListener( updateRangeNode );

    rangeRectangle.moveToBack();
  }
}

centerAndVariability.register( 'RangeNode', RangeNode );