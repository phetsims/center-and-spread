// Copyright 2023, University of Colorado Boulder

import RectangularRadioButtonGroup, { RectangularRadioButtonGroupOptions } from '../../../../sun/js/buttons/RectangularRadioButtonGroup.js';
import DistributionType from '../model/DistributionType.js';
import centerAndVariability from '../../centerAndVariability.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import Property from '../../../../axon/js/Property.js';
import { Path, Text, Node } from '../../../../scenery/js/imports.js';
import tshirtSolidShape from '../../../../sherpa/js/fontawesome-5/tshirtSolidShape.js';
import Tandem from '../../../../tandem/js/Tandem.js';

type SelfOptions = EmptySelfOptions;
type DistributionRadioButtonGroupOptions = SelfOptions & RectangularRadioButtonGroupOptions;

export default class DistributionRadioButtonGroup extends RectangularRadioButtonGroup<DistributionType> {

  public constructor( property: Property<DistributionType>, providedOptions: DistributionRadioButtonGroupOptions ) {
    const options = optionize<DistributionRadioButtonGroupOptions, SelfOptions, RectangularRadioButtonGroupOptions>()( {
      radioButtonOptions: {
        baseColor: 'white'
      }
    }, providedOptions );

    const createTShirtIcon = ( tandem: Tandem, label: string, fill: string ) => {

      const path = new Path( tshirtSolidShape, {
        fill: fill,
        stroke: 'black',
        lineWidth: 12,
        maxWidth: 35
      } );

      const text = new Text( label, {
        fontSize: 16,
        fontWeight: 'bold',
        fill: 'black',
        center: path.center
      } );
      return new Node( {
        children: [ path, text ]
      } );
    };
    super( property, [ {
      value: DistributionType.UNIFORM,
      createNode: tandem => createTShirtIcon( tandem, '1', '#ec5f3a' )
    }, {
      value: DistributionType.GAUSSIAN,
      createNode: tandem => createTShirtIcon( tandem, '2', '#5bc760' )
    }, {
      value: DistributionType.SKEWED,
      createNode: tandem => createTShirtIcon( tandem, '3', '#fdf454' )
    }, {
      value: DistributionType.BIMODAL,

      // TODO: I sampled this color from the design doc, but it is so dark you cannot see the number against it
      createNode: tandem => createTShirtIcon( tandem, '4', '#5324f5' )
    } ], options );
  }
}

centerAndVariability.register( 'DistributionRadioButtonGroup', DistributionRadioButtonGroup );