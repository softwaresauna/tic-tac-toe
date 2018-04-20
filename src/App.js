import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Tic-Tac-Toe</h1>
                </header>

                <Board />
                <Status/>

            </div>
        );
    }
}

export default App;


class Board extends Component {

    render() {

        return (
            <table className="Board">
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
            </table>);

    }
}

class Cell extends Component {

    render() {

        return (<div className="Cell">X</div>);

    }
}

class Status extends Component {

    render() {

        return (<p>Player: <b>X</b></p>);

    }
}