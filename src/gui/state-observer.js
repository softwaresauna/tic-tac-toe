import {createInitialState} from "../engine/state";
import React, {Component} from 'react';

const initialGameState = createInitialState();
const gameStateComponents = [];

export class GameStateObserver extends Component {

    constructor(props) {

        super(props);

        this.registerGameStateComponent();
    }

    registerGameStateComponent() {

        gameStateComponents.push(this);

        this.state = initialGameState;
    }
}


export function updateGameState(newState) {

    gameStateComponents.forEach(listener => listener.setState(newState));
}
