import React from "react";
import ReactDOM from "react-dom";
import Image from './Image';
import Swatch from './Swatch';
import Calculator from './Calculator';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.changeColor = this.changeColor.bind(this)
        this.changeSelection = this.changeSelection.bind(this)

        this.state = {
            bandAColor: 'RD',
            bandBColor: 'RD',
            bandCColor: 'BK',
            bandDColor: 'GD',
            selection: 'bandAColor'
        }
    }

    changeSelection(selection) {
        //alert('changeSelection: ' + selection);
        this.setState({ selection: selection});
    }
    changeColor(selection, colorCode) {
        this.setState({ [selection]: colorCode});
    }    

    render() {
        return (
            <div>
                <center>
                <h1>4-band Resistor Calculator</h1>
                <Calculator bandAColor={this.state.bandAColor} bandBColor={this.state.bandBColor} bandCColor={this.state.bandCColor} bandDColor={this.state.bandDColor} />
                <Image selection={this.state.selection} bandAColor={this.state.bandAColor} bandBColor={this.state.bandBColor} bandCColor={this.state.bandCColor} bandDColor={this.state.bandDColor} handler={this.changeSelection} />
                <Swatch assignedBand='bandAColor' colorHandler={this.changeColor} selectionHandler={this.changeSelection} />
                <Swatch assignedBand='bandBColor' colorHandler={this.changeColor} selectionHandler={this.changeSelection} />
                <Swatch assignedBand='bandCColor' colorHandler={this.changeColor} selectionHandler={this.changeSelection} />
                <Swatch assignedBand='bandDColor' colorHandler={this.changeColor} selectionHandler={this.changeSelection} />
                </center>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);