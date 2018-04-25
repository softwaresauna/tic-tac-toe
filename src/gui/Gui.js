import React, {Component} from 'react';
import './Gui.css';
import {move} from "../engine/engine";
import {createInitialState} from "../engine/state";


class Gui extends Component {

    constructor(props) {
        super(props);

        this.state = createInitialState();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Tic-Tac-Toe</h1>
                </header>

                <Board
                    gameState={this.state}
                    cellClickHandler={this.handleCellClick}/>

                <Status gameState={this.state}/>
            </div>
        );
    }

    handleCellClick = (row, column) => {

        const oldState = this.state;

        this.setState(safeMove());

        function safeMove() {
            try {
                return move(
                    oldState,
                    row,
                    column);
            } catch (e) {
                alert(e);
                return oldState;
            }
        }
    }
}

export default Gui;


function Board(props) {


    function createCell(row, column) {

        return (
            <td>
                <Cell
                    row={row}
                    column={column}
                    gameState={props.gameState}
                    cellClickHandler={props.cellClickHandler}/>
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

class Cell extends Component {

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

    onCellClick = () =>
        this.props.cellClickHandler(
            this.props.row,
            this.props.column);


    getCellContents = () =>
        this.props.gameState.board[this.props.row][this.props.column];

}

class Status extends Component {

    render() {

        const gameState = this.props.gameState;

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