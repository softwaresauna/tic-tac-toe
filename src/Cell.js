import React, {Component} from 'react';

export class Cell extends Component {

    render() {

        return <div>A cell at: {this.props.row}, {this.props.column}</div>
    }
}