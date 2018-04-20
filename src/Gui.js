import React, {Component} from 'react';
import './Gui.css';


class Gui extends Component {

    constructor(props) {
        super(props);

        this.state = {

            board: [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ],

            turn: 'x',
            finished: false,
            winner: undefined
        };
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

                <Restart/>
            </div>
        );
    }

    handleCellClick = (row, column) => {

        console.log("cell click: " + row + ", " + column);

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

        return (<p>Player: <b>{this.props.gameState.turn}</b></p>);

    }
}

class Restart extends Component {

    render() {

        return (<button>Restart</button>);

    }
}