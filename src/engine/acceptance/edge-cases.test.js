import {move} from "../engine";
import {createInitialState} from "../state";

test('ignore move on finished game', () => {

    const state = createInitialState();

    state.finished = true;

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