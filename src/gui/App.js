import React, {Component} from 'react';
import './App.css';
import {Board} from "./Board";
import {_} from "../engine/board-markings";
import {setInitialState} from "./state-observer";



setInitialState({

    board: [
        [_, _, _],
        [_, _, _],
        [_, _, _]
    ]

});

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
