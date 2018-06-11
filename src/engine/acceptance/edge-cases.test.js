import {move} from "../engine";
import {createInitialState, DRAW} from "../state";

test('ignore move on finished game', () => {

    const state = createInitialState();

    state.status = DRAW;

    forEveryMove(moveDoesNotChangeState);

    function forEveryMove(action) {

        [0, 1, 2].forEach(row =>
            [0, 1, 2].forEach(column =>
                action(row, column)));
    }

    function moveDoesNotChangeState(row, column) {
        expect(move(state, row, column)).toEqual(state);
    }

});

test('ignore move on occupied space', () => {

    const state = move(createInitialState(), 1, 1);

    expect(
        move(state, 1, 1).board
    ).toEqual(
        state.board
    );
});