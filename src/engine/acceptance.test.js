import {makeMove} from "./engine";
import {_, INITIAL_STATE, O, X} from "./constants";

test('starting moves', () => {

    let state = INITIAL_STATE;

    state = makeMove(state, 0, 0);

    expect(state.board).toEqual(
        [
            [X, _, _],
            [_, _, _],
            [_, _, _]
        ]
    );

    state = makeMove(state, 1, 1);

    expect(state.board).toEqual(
        [
            [X, _, _],
            [_, O, _],
            [_, _, _]
        ]
    );


});