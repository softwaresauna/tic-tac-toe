import React from 'react';
import './Cell.css';
import {StateObserver} from "./state-observer/StateObserver";
import {getBoard, markBoard} from "../engine/tic-tac-toe";
import {updateState} from "./state-observer/subject";

export class Cell extends StateObserver {

    render() {

        return <td
            className='Cell'
            onClick={this.onClick}>
            {this.getContents()}
        </td>
    }

    onClick = () => {
        console.info(`Clicked cell (${this.props.row}, ${this.props.column})!`);
        markBoard(this.props.row, this.props.column);
        updateState({board: getBoard()})
    };

    getContents = () => this.state.board[this.props.row][this.props.column];
}
