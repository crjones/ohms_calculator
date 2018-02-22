import React from "react";
import ReactDOM from "react-dom";
import {IOhmValueCalculator as Resistor} from './modules/ohmscalculator.js';

const colors = Resistor.colors;

class Image extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
<svg
   version="1.0" width="500" height="300" viewBox="0 0 200 120" id="svg2">
   <g id="layer2">
   <text x="3.3710938" y="95"
       fontSize='12px' fontStyle='normal' fontWeight='normal' fill={(this.props.selection == 'bandAColor') ? 'magenta' : 'black' } fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1' fontFamily='Bitstream Vera Sans'
       id="text10112" xmlSpace="preserve">
       <tspan x="3.3710938" y="95" id="tspan10114">1st Band</tspan>
    </text>
    <text x="9.0566406" y="109.11719"
       fontSize='12px' fontStyle='normal' fontWeight='normal' fill={(this.props.selection == 'bandBColor') ? 'magenta' : 'black' } fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1' fontFamily='Bitstream Vera Sans'
       id="text10116" xmlSpace="preserve">
       <tspan x="9.0566406" y="109.11719" id="tspan10118">2nd Band</tspan>
    </text>
    <text x="123.82813" y="109.11719"
       fontSize='12px' fontStyle='normal' fontWeight='normal' fill={(this.props.selection == 'bandCColor') ? 'magenta' : 'black' } fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1' fontFamily='Bitstream Vera Sans'
       id="text10120" xmlSpace="preserve">
        <tspan x="123.82813" y="109.11719" id="tspan10122">Multiplier</tspan>
    </text>
    <text x="137.13281" y="94.117188"
       fontSize='12px' fontStyle='normal' fontWeight='normal' fill={(this.props.selection == 'bandDColor') ? 'magenta' : 'black' } fillOpacity='1' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1' fontFamily='Bitstream Vera Sans'
       id="text10124" xmlSpace="preserve">
       <tspan x="137.13281" y="94.117188" id="tspan10126">Tolerance</tspan>
    </text>
    <path d="M 60,90 L 65,85 L 65,65"
       fill='none' fillOpacity='0.75' fillRule='evenodd' stroke='#000000' strokeWidth='2.25' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='4' strokeDasharray='none' strokeOpacity='1'
       id="path10128" />
    <path d="M 70,105 L 75,105 L 80,100 L 80,75 L 80,65"
       fill='none' fillOpacity='0.75' fillRule='evenodd' stroke='#000000' strokeWidth='2.25' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='4' strokeDasharray='none' strokeOpacity='1'
       id="path10130" />
    <path d="M 120,105 L 105,105 L 95,95 L 95,65"
       fill='none' fillOpacity='0.75' fillRule='evenodd' stroke='#000000' strokeWidth='2.25' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='4' strokeDasharray='none' strokeOpacity='1'
       id="path10132" />
    <path d="M 135,90.065025 L 130,90.065025 L 125,85.750345 L 125,68.491627"
       fill='none' fillOpacity='0.75' fillRule='evenodd' stroke='#000000' strokeWidth='2.25' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='4' strokeDasharray='none' strokeOpacity='1'
       id="path10134" />
   </g>
   <g id="layer1">
    <path d="M 25.577023,45.904888 C 25.577023,20.904888 50.577022,20.904888 60.577022,20.904888 C 70.577022,20.904888 75.577021,25.904888 100.57702,25.904888 C 125.57702,25.904888 130.57702,20.904888 140.57702,20.904888 C 150.57702,20.904888 175.57702,20.904888 175.57702,45.904888 C 175.57702,70.904888 150.57702,70.904888 140.57702,70.904888 C 130.57702,70.904888 125.57702,65.904888 100.57702,65.904888 C 75.577021,65.904888 70.577022,70.904888 60.577022,70.904888 C 50.577022,70.904888 25.778858,71.620488 25.577023,45.904888 z "
       fill="tan" fillOpacity='0.45' fillRule='evenodd' stroke='black' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
       id="resistorBody" />
    <path d="M 60.077022,20.404888 L 60.077022,70.404888 C 63.670772,70.404888 66.61444,69.763508 70.077022,68.936138 L 70.077022,21.873638 C 66.61444,21.046268 63.670772,20.404888 60.077022,20.404888 z "
       fill={colors[this.props.bandAColor].hexcolor} fillOpacity='1' fillRule='evenodd' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
       id="svgBandA" cursor="pointer" pointerEvents="all" onClick={ this.props.handler.bind(this, 'bandAColor') } />
    <path d="M 75.077021,23.436138 L 75.077021,68.373638 C 77.833064,67.764415 81.056653,67.145981 85.077021,66.686138 L 85.077021,25.123638 C 81.056653,24.663795 77.833064,24.045361 75.077021,23.436138 z "
       fill={colors[this.props.bandBColor].hexcolor} fillOpacity='1' fillRule='evenodd' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
       id="svgBandB" cursor="pointer" pointerEvents="all" onClick={ this.props.handler.bind(this, 'bandBColor') } />
    <path d="M 90.077021,25.561138 L 90.077021,66.248638 C 93.012712,66.045115 96.309486,65.914842 100.07702,65.904888 L 100.07702,25.904888 C 96.309486,25.894934 93.012712,25.764661 90.077021,25.561138 z "
       fill={colors[this.props.bandCColor].hexcolor} fillOpacity='1' fillRule='evenodd' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
       id="svgBandC" cursor="pointer" pointerEvents="all" onClick={ this.props.handler.bind(this, 'bandCColor') } />
    <path d="M 130.07702,22.498638 C 127.28962,23.167726 124.15989,23.922306 120.07702,24.561138 L 120.07702,67.248638 C 124.15989,67.88747 127.28962,68.64205 130.07702,69.311138 L 130.07702,22.498638 z "
       fill={colors[this.props.bandDColor].hexcolor} fillOpacity='1' fillRule='evenodd' stroke='none' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
       id="svgBandD" cursor="pointer" pointerEvents="all" onClick={ this.props.handler.bind(this, 'bandDColor') } />    
    <path d="M 25.577023,45.904888 C 25.577023,20.904888 50.577022,20.904888 60.577022,20.904888 C 70.577022,20.904888 75.577021,25.904888 100.57702,25.904888 C 125.57702,25.904888 130.57702,20.904888 140.57702,20.904888 C 150.57702,20.904888 175.57702,20.904888 175.57702,45.904888 C 175.57702,70.904888 150.57702,70.904888 140.57702,70.904888 C 130.57702,70.904888 125.57702,65.904888 100.57702,65.904888 C 75.577021,65.904888 70.577022,70.904888 60.577022,70.904888 C 50.577022,70.904888 25.778858,71.620488 25.577023,45.904888 z "
       fill="none" fillOpacity='0.45' fillRule='evenodd' stroke='black' strokeWidth='1px' strokeLinecap='butt' strokeLinejoin='miter' strokeOpacity='1'
       id="resistorBodyOutline" />
    <rect width="20.32258" height="10" x="5.4157324" y="40.904888"
       opacity='1' fill='#000000' fillOpacity='0.27160495' stroke='#000000' strokeWidth='0.82305491' strokeLinecap='square' strokeMiterlimit='4' strokeDasharray='0.82305488, 0.82305488' strokeDashoffset='0' strokeOpacity='1'
       id="wireLeft" />
    <rect width="19.672131" height="10" x="175.40489" y="40.404888"
       opacity='1' fill='#000000' fillOpacity='0.27160495' stroke='#000000' strokeWidth='0.82305491' strokeLinecap='square' strokeMiterlimit='4' strokeDasharray='0.82305488, 0.82305488' strokeDashoffset='0' strokeOpacity='1'
       id="wireRight" />
   </g>
</svg>
        );
    }
}

export default Image;