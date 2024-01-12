// Copyright 2023-2024, University of Colorado Boulder

/**
 * CAVGroupSortInteractionModel is a subclass that adds logic to place the drag indicator in a
 * spot that is not the median. Its role is to minimize the occurrence of drag indicator and median indicator overlap.
 * @author Marla Schulz (PhET Interactive Simulations)
 */

import centerAndVariability from '../../centerAndVariability.js';
import CAVSoccerSceneModel from './CAVSoccerSceneModel.js';
import SoccerBall from '../../../../soccer-common/js/model/SoccerBall.js';
import GroupSortInteractionModel, { GroupSortInteractionModelOptions } from '../../../../scenery-phet/js/accessibility/group-sort/model/GroupSortInteractionModel.js';
import TProperty from '../../../../axon/js/TProperty.js';
import Multilink from '../../../../axon/js/Multilink.js';

export default class CAVGroupSortInteractionModel extends GroupSortInteractionModel<SoccerBall> {

  public constructor( private readonly selectedSceneModelProperty: TProperty<CAVSoccerSceneModel>,
                      private readonly selectedSceneStackedSoccerBallCountProperty: TProperty<number>,
                      private readonly selectedSceneMaxKicksProperty: TProperty<number>,
                      sceneModels: CAVSoccerSceneModel[], providedOptions?: GroupSortInteractionModelOptions ) {
    super( providedOptions );

    const allValueProperties = sceneModels.flatMap( sceneModel => sceneModel.soccerBalls.map( soccerBall => soccerBall.valueProperty ) );

    // It is important to link to the values of all the soccer balls in the screen, so that the dragIndicator can be
    // updated after all the balls have landed, and not just after they have been kicked.
    Multilink.multilinkAny( [
      ...allValueProperties,
      this.selectedSceneModelProperty,
      this.hasGroupItemBeenSortedProperty,
      this.selectedSceneStackedSoccerBallCountProperty,
      this.selectedSceneMaxKicksProperty,
      this.isKeyboardFocusedProperty,

      // The median is queried in the subclass implementation, so needs to trigger an update
      ...sceneModels.map( sceneModel => sceneModel.medianValueProperty )
    ], () => this.updateSelectedGroupItem() );
  }

  // This is an algorithm that can be used to get the best guess about where the sort indicator should be set to based
  // on the current state of the soccer balls.
  public updateSelectedGroupItem(): void {
    const soccerBallCount = this.selectedSceneStackedSoccerBallCountProperty.value;
    const maxKicks = this.selectedSceneMaxKicksProperty.value;
    const sceneModel = this.selectedSceneModelProperty.value;

    //  If an object was sorted, objects are not input enabled, or the max number of balls haven't been kicked out
    //  don't show the sortIndicatorCue.
    this.mouseSortCueVisibleProperty.value = !this.hasGroupItemBeenSortedProperty.value &&
                                             !this.isKeyboardFocusedProperty.value &&
                                             soccerBallCount === maxKicks &&
                                             this.enabledProperty.value &&
                                             _.every( sceneModel?.getActiveSoccerBalls(), soccerBall => soccerBall.valueProperty.value !== null );

    if ( !this.isKeyboardFocusedProperty.value ) {

      const reversedBalls = sceneModel.getActiveSoccerBalls().filter( soccerBall => soccerBall.valueProperty.value !== null ).reverse();

      // Show the sort indicator over the most recently landed ball
      this.selectedGroupItemProperty.value = reversedBalls.length > 0 ? reversedBalls[ 0 ] : null;

      // TODO: MS!! Should the above algorithm be in soccer-common? https://github.com/phetsims/scenery-phet/issues/815
      /////////////////

      // Empirically determined based on height of AccordionBox and play area. This may need to be adjusted if those change.
      const maxHeight = 8;

      const selectedGroupItem = this.selectedGroupItemProperty.value;

      const selectedValue = selectedGroupItem?.valueProperty.value ?? null;
      if ( selectedValue !== null ) {
        const stackHeight = sceneModel.getStackAtValue( selectedValue ).length;
        if ( selectedValue === sceneModel.medianValueProperty.value || stackHeight > maxHeight ) {

          // Order kicked, not order landed
          const topBallsInReversedOrder = sceneModel.getActiveSoccerBalls().reverse().filter(
            ball => sceneModel.getTopSoccerBalls().includes( ball )
          );

          // add the sortIndicatorArrowNode above the last object when it is added to the play area.
          // However, we also want to make sure that the dragIndicator is not in the same position as the Median Indicator, if possible
          // Note the drag indicator only shows up after 15 soccer balls have landed, and it would be impossibly likely for
          // all 15 to be the same value unless using the ?sameSpot query parameter, which is not a public query parameter.
          const allEqualToMedian = topBallsInReversedOrder.every( soccerBall => soccerBall.valueProperty.value === sceneModel.medianValueProperty.value );

          if ( !allEqualToMedian ) {

            // Show it over a recently landed ball that is not in the median stack
            this.selectedGroupItemProperty.value = topBallsInReversedOrder
              .find( soccerBall => soccerBall.valueProperty.value !== sceneModel.medianValueProperty.value &&
                                   sceneModel.getStackAtValue( soccerBall.valueProperty.value! ).length <= maxHeight )!;
          }
        }
      }
    }
  }
}

centerAndVariability.register( 'CAVGroupSortInteractionModel', CAVGroupSortInteractionModel );