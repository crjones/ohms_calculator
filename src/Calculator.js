import React from "react";
import ReactDOM from "react-dom";
import { IOhmValueCalculator as Resistor } from './modules/ohmscalculator.js';

function humanNumber(num, digits) {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
        break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + ' ' + si[i].symbol;
    }


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <h1>
            { humanNumber(Resistor.calculateOhmValue(this.props.bandAColor,this.props.bandBColor,this.props.bandCColor,this.props.bandDColor), 2) + String.fromCharCode(8486) + ' ' + String.fromCharCode(177) + ' ' + Resistor.colors[this.props.bandDColor].tolerance}
            </h1>            
        );
    }
}

export default Calculator;