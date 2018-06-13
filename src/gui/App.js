import React, {Component} from 'react';
import './App.css';
import {Board} from "./Board";
import {_, INITIAL_STATE} from "../engine/constants";
import {setInitialState} from "./state-observer";



setInitialState(INITIAL_STATE);

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