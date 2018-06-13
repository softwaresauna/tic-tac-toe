import React from 'react';
import './App.css';
import {Board} from "./Board";
import logo from './sauna-logo.png'

export default function App() {

    return (
        <div className="App">

            <a href="https://softwaresauna.com">
                <img src={logo}/>
            </a>

            <h1>Tic-Tac-Toe</h1>

            <Board/>

        </div>
    );
}
