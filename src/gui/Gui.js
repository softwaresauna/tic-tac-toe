import React, {Component} from 'react';
import './Gui.css';
import {move} from "../engine/engine";
import {registerGameStateComponent, updateGameState} from "../gui/component-state";


function Gui() {

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Tic-Tac-Toe</h1>
            </header>

            <Board/>

            <Status/>
        </div>
    );
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

class GameStateComponent extends Component {

    constructor(props) {
        super(props);

        registerGameStateComponent(this);
    }

}

class Cell extends GameStateComponent {

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

        const newState = this.safeMove();

        updateGameState(newState);
    };

    safeMove() {

        const oldState = this.state;

        try {
            return move(
                oldState,
                this.props.row,
                this.props.column);
        } catch (e) {
            alert(e);
            return oldState;
        }
    }

    getCellContents = () =>
        this.state.board[this.props.row][this.props.column];

}

class Status extends GameStateComponent {

    render() {

        const gameState = this.state;

        return gameState.finished ? (
            <div>
                <h2>GAME OVER</h2>
                {renderWinner()}
            </div>
        ) : (
            <p>Next player: <b>{gameState.turn}</b></p>
        );

        function renderWinner() {
            return gameState.winner
                ? <p>Winner: <b>{gameState.winner}</b></p>
                : <p>A draw!</p>;
        }
    }
}