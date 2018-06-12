import {Component} from 'react';

const observers = [];

let initialState = {};

export function setInitialState(state) {

    initialState = state;
}

export function updateState(newState) {

    observers.forEach(listener => listener.setState(newState));
}

function registerStateObserver(observer) {

    observers.push(observer);
}

export class StateObserver extends Component {

    constructor(props) {

        super(props);

        this.state = initialState;

        registerStateObserver(this);
    }
}

