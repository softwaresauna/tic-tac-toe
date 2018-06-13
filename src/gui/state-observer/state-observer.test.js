import {setInitialState, updateState} from "./subject";
import {StateObserver} from "./StateObserver";

class MyObserver extends StateObserver {

    state;

    setState(state) {

        this.state = state;
    }
}

test('observers receive initial state', ()=>{

    setInitialState(42);

    const observer1 = new MyObserver();

    setInitialState(43);

    const observer2 = new MyObserver();

    expect(observer1.state).toEqual(42);
    expect(observer2.state).toEqual(43);
});

test('observer receives state change', () => {

    setInitialState(41);

    const observer = new MyObserver();

    updateState(42);

    expect(observer.state).toEqual(42);
});