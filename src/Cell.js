import React, {Component} from 'react';

export class Cell extends Component {

    constructor(props) {

        super(props);

        this.state = { value: `A cell at: ${this.props.row}, ${this.props.column}` };
    }

    render() {

        return <div>{this.state.value}</div>
    }
}