
const observers = [];

let initialState = {};

export function setInitialState(state) {

    initialState = state;
}

export function updateState(newState) {

    observers.forEach(observer => observer.setState(newState));
}

export function registerStateObserver(observer) {

    observers.push(observer);

    observer.state = initialState;
}


