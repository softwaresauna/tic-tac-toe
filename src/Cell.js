import React from 'react';
import './Cell.css';
import {StateObserver} from "./gui/state-observer";

export class Cell extends StateObserver {

    render() {

        return <td className='Cell'>{this.state.board[this.props.row][this.props.column]}</td>
    }
}