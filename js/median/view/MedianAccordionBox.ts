// Copyright 2023, University of Colorado Boulder

import CAVAccordionBox from '../../common/view/CAVAccordionBox.js';
import CardNodeContainer from '../../common/view/CardNodeContainer.js';
import TopRepresentationCheckboxGroup from '../../common/view/TopRepresentationCheckboxGroup.js';
import { Text } from '../../../../scenery/js/imports.js';
import CenterAndVariabilityStrings from '../../CenterAndVariabilityStrings.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import MedianModel from '../model/MedianModel.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import centerAndVariability from '../../centerAndVariability.js';

export default class MedianAccordionBox extends CAVAccordionBox {

  public constructor( model: MedianModel, layoutBounds: Bounds2, tandem: Tandem, top: number ) {
    super( model, new CardNodeContainer( model, {

        // Expose this intermediate layer to make it so that clients can hide the number cards with one call
        tandem: tandem.createTandem( 'cardNodeContainer' )
      } ), new TopRepresentationCheckboxGroup( model, {
        includeSortData: true,
        includeMean: false,
        medianBarIconOptions: {
          notchDirection: 'up',
          barStyle: 'continuous'
        },
        showMedianCheckboxIcon: false,
        tandem: tandem.createTandem( 'checkboxGroup' )
      } ),
      new Text( CenterAndVariabilityStrings.distanceInMetersStringProperty, {
        font: new PhetFont( 16 ),
        maxWidth: 300
      } ),
      layoutBounds, {
        leftMargin: 0,
        tandem: tandem,
        top: top,
        valueReadoutsNode: null,
        centerX: layoutBounds.centerX
      } );
  }
}

centerAndVariability.register( 'MedianAccordionBox', MedianAccordionBox );