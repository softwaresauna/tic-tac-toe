import React, {Component} from 'react';
import './Gui.css';


let gameState = {

    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],

    turn: 'x',
    finished: false,
    winner: undefined
};

class Gui extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Tic-Tac-Toe</h1>
                </header>

                <Board/>

                <Status/>

                <Restart/>
            </div>
        );
    }
}

export default Gui;


class Board extends Component {

    render() {

        return (
            <table className="Board">
                <tbody>
                <tr>
                    <td><Cell row="0" column="0"/></td>
                    <td><Cell row="0" column="1"/></td>
                    <td><Cell row="0" column="2"/></td>
                </tr>
                <tr>
                    <td><Cell row="1" column="0"/></td>
                    <td><Cell row="1" column="1"/></td>
                    <td><Cell row="1" column="2"/></td>
                </tr>
                <tr>
                    <td><Cell row="2" column="0"/></td>
                    <td><Cell row="2" column="1"/></td>
                    <td><Cell row="2" column="2"/></td>
                </tr>
                </tbody>
            </table>);

    }
}

class Cell extends Component {

    render() {

        return (
            <div
                className="Cell"
                onClick={ this.onCellClick }
            >
                { this.getCellContents() }
            </div>
        );
    }

    onCellClick = () => {
        console.log(
            "click: " +
            this.props.row + ", " +
            this.props.column)
    };

    getCellContents = () =>
        gameState.board[this.props.row][this.props.column];

}

class Status extends Component {

    render() {

        return (<p>Player: <b>{ gameState.turn }</b></p>);

    }
}

class Restart extends Component {

    render() {

        return (<button>Restart</button>);

    }
}