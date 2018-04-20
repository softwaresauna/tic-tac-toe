import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Tic-Tac-Toe</h1>
                </header>

                <Board/>


            </div>
        );
    }
}

export default App;


class Board extends Component {

    render() {

        return (<p>I'm a board!!!</p>);

    }
}