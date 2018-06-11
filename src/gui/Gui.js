import React, {Component} from 'react';
import './Gui.css';
import {move} from "../engine/engine";
import {GameStateObserver, updateGameState} from "./state-observer";
import logo from './sauna-logo-small.png'
import {DRAW, IN_PROGRESS, O_WON, X_WON} from "../engine/state";


function Gui() {

    return <div className="App">
        <header className="App-header">
            <h1 className="App-title">Tic-Tac-Toe</h1>

            <div>
                <span>Powered by:</span>
                <br/>
                <a href="http://softwaresauna.com">
                    <img src={logo} className="App-logo" alt="logo"/>
                </a>
            </div>
        </header>

        <Board/>

        <Status/>

        <footer>
            <a href="https://github.com/softwaresauna/tic-tac-toe">Go to source</a>
        </footer>
    </div>;
}

export default Gui;


function Board() {

    function createCell(row, column) {

        return (
            <td>
                <Cell
                    row={row}
                    column={column}
                />
            </td>);
    }

    return (
        <table className="Board">
            <tbody>
            <tr>
                {createCell(0, 0)}
                {createCell(0, 1)}
                {createCell(0, 2)}
            </tr>
            <tr>
                {createCell(1, 0)}
                {createCell(1, 1)}
                {createCell(1, 2)}
            </tr>
            <tr>
                {createCell(2, 0)}
                {createCell(2, 1)}
                {createCell(2, 2)}
            </tr>
            </tbody>
        </table>);
}

class Cell extends GameStateObserver {

    render() {

        return (
            <div
                className="Cell"
                onClick={this.onCellClick}
            >
                {this.getCellContents()}
            </div>
        );
    }

    onCellClick = () => {

        const newState = move(
            this.state,
            this.props.row,
            this.props.column
        );

        updateGameState(newState);
    };

    getCellContents = () =>
        this.state.board[this.props.row][this.props.column];

}

class Status extends GameStateObserver {

    render() {

        const gameState = this.state;

        switch (gameState.status) {
            case X_WON:
                return (
                    <div>
                        <h2>GAME OVER</h2>
                        X won!
                    </div>
                );
            case O_WON:
                return (
                    <div>
                        <h2>GAME OVER</h2>
                        O won!
                    </div>
                );
            case DRAW:
                return (
                    <div>
                        <h2>GAME OVER</h2>
                        A draw!
                    </div>
                );
            case IN_PROGRESS:
                return (
                    <div>
                        <p>Next player: <b>{gameState.turn}</b></p>
                    </div>
                );
            default:
                return <div/>
        }
    }
}