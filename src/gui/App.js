import React, {Component} from 'react';
import './App.css';
import {Board} from "./Board";

console.info("Hello, Tic-Tac-Toe!");

class App extends Component {

    render() {
        return (
            <div className="App">

                <Board/>

            </div>
        );
    }
}

export default App;
