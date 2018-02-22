import React from "react";
import ReactDOM from "react-dom";
import {IOhmValueCalculator as Resistor} from './modules/ohmscalculator.js';

var colorList = Object.keys(Resistor.colors);

class Swatch extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var swatches = colorList.map(function(color) {
                            let swatch = Resistor.colors[color];
                            swatch.code = color;
                            if(swatch.sigvalue !== '' || ((this.props.assignedBand !== 'bandAColor' && this.props.assignedBand !== 'bandBColor') && swatch.sigvalue === '')) {
                                return (
                                    <svg key={swatch.code} version="1.0" width="60" height="60" viewBox="0 0 60 60" id={'svg' + swatch.code} onClick={ this.props.colorHandler.bind(this, this.props.assignedBand, swatch.code)} >
                                        <g id="layer1">
                                            <rect width="50" height="50" x="5" y="5"
                                            fill={swatch.hexcolor} fillOpacity='1' fillRule='evenodd' stroke='white' strokeWidth='0px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                                            id="swatch1" />
                                            <rect width="50" height="50" x="5" y="5"
                                            fill='none' fillOpacity='1' fillRule='evenodd' stroke='black' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
                                            id="swatchOutline1" />
                                        </g>
                                    </svg>
                                );
    
                            } else {
                                return (
                                <svg key={swatch.code} version="1.0" width="60" height="60" viewBox="0 0 60 60" id={'svg' + swatch.code} >
                                    <g id="layer1">
                                    <rect width="50" height="50" x="5" y="5" fill='none' stroke='none'/>
                                    </g>
                                </svg>
                                );
                            }
                        }, this)
        return (
            <div onMouseOver={ this.props.selectionHandler.bind(this, this.props.assignedBand)}>{ swatches }</div>            
        );
    }
}

export default Swatch;