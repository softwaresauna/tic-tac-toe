import {createInitialState} from "../engine/state";

const initialGameState = createInitialState();

const gameStateComponents = [];

export function registerGameStateComponent(component) {

    gameStateComponents.push(component);

    component.state = initialGameState;
}

export function updateGameState(newState) {

    gameStateComponents.forEach(listener => listener.setState(newState));
}
