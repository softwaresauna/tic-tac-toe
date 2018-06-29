import React from 'react';
import './Cell.css';
import {StateObserver} from "./state-observer/StateObserver";
import {makeMove} from "../engine/engine";

export class Cell extends StateObserver {

    render() {

        return <td
            className='Cell'
            onClick={this.onClick}>
            {this.getContents()}
        </td>
    }

    onClick = () => {

        makeMove(this.state, this.props.row, this.props.column);
    };

    getContents = () => this.state.board[this.props.row][this.props.column];
}