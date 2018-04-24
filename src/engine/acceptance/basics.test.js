import {move} from "../engine";
import {createInitialState, O, X} from "../state";

test('turn alternates', () => {

    const state1 = move(createInitialState(), 0, 0);
    const state2 = move(state1, 0, 1);
    const state3 = move(state2, 1, 0);
    const state4 = move(state3, 1, 1);

    expect(state1.turn).toBe(X);
    expect(state2.turn).toBe(O);
    expect(state3.turn).toBe(X);
    expect(state4.turn).toBe(O);
});

test('not finished during game', () => {

    const state1 = move(createInitialState(), 0, 0);
    const state2 = move(state1, 0, 1);
    const state3 = move(state2, 1, 0);
    const state4 = move(state3, 1, 1);

    expect(state1.finished).toBeFalsy();
    expect(state2.finished).toBeFalsy();
    expect(state3.finished).toBeFalsy();
    expect(state4.finished).toBeFalsy();
});

