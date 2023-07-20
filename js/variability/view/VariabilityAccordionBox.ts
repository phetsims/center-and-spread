// Copyright 2023, University of Colorado Boulder

import { AlignBox, AlignGroup, VBox } from '../../../../scenery/js/imports.js';
import CenterAndVariabilityStrings from '../../CenterAndVariabilityStrings.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import centerAndVariability from '../../centerAndVariability.js';
import VariabilityModel from '../model/VariabilityModel.js';
import VariabilityPlotNode from './VariabilityPlotNode.js';
import VariabilityMeasure from '../model/VariabilityMeasure.js';
import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import ToggleNode from '../../../../sun/js/ToggleNode.js';
import DynamicProperty from '../../../../axon/js/DynamicProperty.js';
import VariabilityReadoutText from './VariabilityReadoutText.js';
import CAVColors from '../../common/CAVColors.js';
import CAVAccordionBox from '../../common/view/CAVAccordionBox.js';
import CAVConstants from '../../common/CAVConstants.js';
import SoccerSceneModel from '../../soccer-common/model/SoccerSceneModel.js';
import Utils from '../../../../dot/js/Utils.js';
import VariabilitySceneModel from '../model/VariabilitySceneModel.js';
import TReadOnlyProperty from '../../../../axon/js/TReadOnlyProperty.js';
import VariabilityMeasureCheckbox from './VariabilityMeasureCheckbox.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import AccordionBoxTitleNode from '../../common/view/AccordionBoxTitleNode.js';
import NumberLineNode from '../../soccer-common/view/NumberLineNode.js';
import CAVInfoButton from '../../common/view/CAVInfoButton.js';
import { CreateGatedVisibleProperty } from '../../common/model/CreateGatedVisibleProperty.js';

export default class VariabilityAccordionBox extends CAVAccordionBox {

  private readonly plotToggleNode: ToggleNode<SoccerSceneModel, VariabilityPlotNode>;

  public constructor( model: VariabilityModel, layoutBounds: Bounds2, tandem: Tandem, top: number, playAreaNumberLineNode: NumberLineNode ) {

    // Specify a "footprint" within which we do all the layout.
    const backgroundShape = CAVConstants.ACCORDION_BOX_CONTENTS_SHAPE_VARIABILITY;
    const backgroundNode = CAVAccordionBox.createBackgroundNode( backgroundShape, CAVColors.variabilityAccordionBoxFillProperty );

    // Determine which title string we are showing based off the selectedVariabilityMeasure
    const currentProperty = new DerivedProperty( [ model.selectedVariabilityMeasureProperty ], selectedVariability =>
      selectedVariability === VariabilityMeasure.RANGE ? CenterAndVariabilityStrings.rangeStringProperty :
      selectedVariability === VariabilityMeasure.IQR ? CenterAndVariabilityStrings.interquartileRangeIQRStringProperty :
      CenterAndVariabilityStrings.meanAbsoluteDeviationMADStringProperty
    );

    const accordionBoxTitleProperty = new DynamicProperty<string, unknown, unknown>( currentProperty );

    const contents = _.range( 4 ).map( i => {
      return {
        value: model.sceneModels[ i ],
        createNode: ( tandem: Tandem ) => new VariabilityPlotNode( model, model.variabilitySceneModels[ i ], playAreaNumberLineNode, {
          tandem: tandem,
          bottom: backgroundShape.bounds.height
        } ),

        tandemName: 'plotNode' + ( i + 1 )
      };
    } );

    const plotToggleNode = new ToggleNode( model.selectedSceneModelProperty, contents, {
      bottom: backgroundShape.bounds.height,
      tandem: tandem.createTandem( 'plotToggleNode' )
    } );

    backgroundNode.addChild( new CAVInfoButton( model.isInfoVisibleProperty, backgroundShape, tandem.createTandem( 'infoButton' ) ) );

    // Ensure a consistent width among both the icons and the text across the different accordionBox views.
    const textGroup = new AlignGroup();
    const iconGroup = new AlignGroup();

    const checkboxToggleNode = new AlignBox( new ToggleNode( model.selectedVariabilityMeasureProperty, [ {
      createNode: tandem => new VariabilityMeasureCheckbox( model.isRangeVisibleProperty,
        CenterAndVariabilityStrings.rangeStringProperty, iconGroup, textGroup, CAVColors.rangeFillProperty, { tandem: tandem } ),
      tandemName: 'rangeAccordionCheckbox',
      value: VariabilityMeasure.RANGE
    }, {
      createNode: tandem => new VariabilityMeasureCheckbox( model.isIQRVisibleProperty,
        CenterAndVariabilityStrings.iqrStringProperty, iconGroup, textGroup, CAVColors.iqrColorProperty, { tandem: tandem } ),
      tandemName: 'iqrAccordionCheckbox',
      value: VariabilityMeasure.IQR
    }, {
      createNode: tandem => new VariabilityMeasureCheckbox( model.isMADVisibleProperty,
        CenterAndVariabilityStrings.madStringProperty, iconGroup, textGroup, CAVColors.madRectangleColorProperty, { tandem: tandem } ),
      tandemName: 'madAccordionCheckbox',
      value: VariabilityMeasure.MAD
    } ], {
      alignChildren: ToggleNode.RIGHT
    } ), { alignBounds: backgroundShape.bounds, xAlign: 'right', yAlign: 'center' } );

    backgroundNode.addChild( plotToggleNode );
    backgroundNode.addChild( checkboxToggleNode );

    const deriveValueProperty = ( accessor: ( variabilitySceneModel: VariabilitySceneModel ) => TReadOnlyProperty<number | null>, roundToDecimal: number | null ) => {
      return DerivedProperty.deriveAny( [ model.selectedSceneModelProperty, ...model.variabilitySceneModels.map( accessor ), CenterAndVariabilityStrings.valueUnknownStringProperty ], () => {
        const result = accessor( model.selectedSceneModelProperty.value as VariabilitySceneModel ).value;
        const resultRounded = result !== null && roundToDecimal !== null ? Utils.toFixed( result, roundToDecimal ) : result;
        return resultRounded === null ? CenterAndVariabilityStrings.valueUnknownStringProperty.value : resultRounded;
      } );
    };

    const rangeValueProperty = deriveValueProperty( vsm => vsm.rangeValueProperty, null );
    const medianValueProperty = deriveValueProperty( vsm => vsm.medianValueProperty, null );
    const iqrValueProperty = deriveValueProperty( vsm => vsm.iqrValueProperty, null );
    const madValueProperty = deriveValueProperty( vsm => vsm.madValueProperty, CAVConstants.VARIABILITY_MEASURE_DECIMAL_POINTS );
    const meanValueProperty = deriveValueProperty( vsm => vsm.meanValueProperty, CAVConstants.VARIABILITY_MEASURE_DECIMAL_POINTS );

    const readoutsToggleNode = new AlignBox( new ToggleNode( model.selectedVariabilityMeasureProperty, [ {
      value: VariabilityMeasure.RANGE,
      tandemName: 'rangeReadoutToggleNode',
      createNode: tandem => {
        const rangeEqualsValueStringProperty = new PatternStringProperty( CenterAndVariabilityStrings.rangeEqualsValuePatternStringProperty,
          { value: rangeValueProperty }, {
            tandem: tandem.createTandem( 'rangeEqualsValueStringProperty' )
          }
        );


        const selectedScene = model.selectedSceneModelProperty.value as VariabilitySceneModel;
        const rangeReadoutTextTandem = tandem.createTandem( 'rangeReadoutText' );
        const rangeReadoutText = new VariabilityReadoutText( rangeEqualsValueStringProperty, selectedScene.rangeValueProperty,
          model.isRangeVisibleProperty, {
            fill: CAVColors.meanColorProperty,
            visibleProperty: CreateGatedVisibleProperty( model.isRangeVisibleProperty, rangeReadoutTextTandem ),
            tandem: rangeReadoutTextTandem
          } );

        // Nest in a new Node so that ToggleNode has independent control over the visibility
        return new VBox( {
          align: 'left',
          spacing: 10,
          children: [ rangeReadoutText ]
        } );
      }
    }, {
      value: VariabilityMeasure.IQR,
      tandemName: 'iqrReadoutToggleNode',
      createNode: tandem => {

        const medianEqualsValueStringProperty = new PatternStringProperty( CenterAndVariabilityStrings.medianEqualsValuePatternStringProperty,
          { value: medianValueProperty }, {
            tandem: tandem.createTandem( 'medianEqualsValueStringProperty' )
          }
        );

        const selectedScene = model.selectedSceneModelProperty.value as VariabilitySceneModel;
        const medianReadoutText = new VariabilityReadoutText( medianEqualsValueStringProperty, selectedScene.medianValueProperty,
          model.isIQRVisibleProperty, {
            fill: CAVColors.medianColorProperty,
            tandem: tandem.createTandem( 'medianReadoutText' ),
            phetioVisiblePropertyInstrumented: true
          } );

        const iqrEqualsValueStringProperty = new PatternStringProperty( CenterAndVariabilityStrings.iqrEqualsValuePatternStringProperty,
          { value: iqrValueProperty }, {
            tandem: tandem.createTandem( 'iqrEqualsValueStringProperty' )
          }
        );

        const iqrReadoutTextTandem = tandem.createTandem( 'iqrReadoutText' );
        const iqrReadoutText = new VariabilityReadoutText( iqrEqualsValueStringProperty, selectedScene.iqrValueProperty,
          model.isIQRVisibleProperty, {
            fill: CAVColors.iqrLabelColorProperty,
            visibleProperty: CreateGatedVisibleProperty( model.isIQRVisibleProperty, iqrReadoutTextTandem ),
            tandem: iqrReadoutTextTandem
          } );

        // Nest in a new Node so that ToggleNode has independent control over the visibility
        return new VBox( {
          align: 'left',
          spacing: 10,
          excludeInvisibleChildrenFromBounds: false,
          children: [
            medianReadoutText,
            iqrReadoutText
          ]
        } );
      }
    }, {
      value: VariabilityMeasure.MAD,
      tandemName: 'madReadoutToggleNode',
      createNode: tandem => {

        const meanEqualsValueStringProperty = new PatternStringProperty( CenterAndVariabilityStrings.meanEqualsValueMPatternStringProperty,
          { value: meanValueProperty }, {
            tandem: tandem.createTandem( 'meanEqualsValueStringProperty' )
          }
        );
        const madEqualsValueStringProperty = new PatternStringProperty( CenterAndVariabilityStrings.madEqualsValuePatternStringProperty,
          { value: madValueProperty }, {
            tandem: tandem.createTandem( 'madEqualsValueStringProperty' )
          }
        );

        const selectedScene = model.selectedSceneModelProperty.value as VariabilitySceneModel;
        const meanReadoutText = new VariabilityReadoutText( meanEqualsValueStringProperty, selectedScene.meanValueProperty,
          model.isMADVisibleProperty, {
            fill: CAVColors.meanColorProperty,
            tandem: tandem.createTandem( 'meanReadoutText' ),
            phetioVisiblePropertyInstrumented: true
          } );

        const madReadoutTextTandem = tandem.createTandem( 'madReadoutText' );
        const madReadoutText = new VariabilityReadoutText( madEqualsValueStringProperty, selectedScene.madValueProperty,
          model.isMADVisibleProperty, {
            fill: CAVColors.madColorProperty,
            visibleProperty: CreateGatedVisibleProperty( model.isMADVisibleProperty, madReadoutTextTandem ),
            tandem: madReadoutTextTandem
          } );

        // Nest in a new Node so that ToggleNode has independent control over the visibility
        return new VBox( {
          spacing: 10,
          align: 'left',
          excludeInvisibleChildrenFromBounds: false,
          children: [
            meanReadoutText,
            madReadoutText
          ]
        } );
      }
    } ], {
      alignChildren: ToggleNode.NONE,
      tandem: tandem.createTandem( 'readoutsToggleNode' )
    } ), { alignBounds: backgroundShape.bounds, xAlign: 'left', yAlign: 'center' } );

    backgroundNode.addChild( readoutsToggleNode );

    super( backgroundNode, {
      tandem: tandem,
      titleNode: new AccordionBoxTitleNode( accordionBoxTitleProperty, CAVColors.variabilityAccordionBoxFillProperty, tandem ),
      expandedProperty: model.isAccordionBoxExpandedProperty,

      // Leave space for the radio buttons at the left
      left: 65,
      fill: CAVColors.variabilityAccordionBoxFillProperty
    } );

    this.plotToggleNode = plotToggleNode;
  }
}

centerAndVariability.register( 'VariabilityAccordionBox', VariabilityAccordionBox );