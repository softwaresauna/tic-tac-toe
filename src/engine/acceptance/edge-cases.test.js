import {move} from "../engine";
import {createInitialState} from "../state";

test('reject move on finished game', () => {

    const state = createInitialState();

    state.finished = true;

    expect(() => move(state, 0, 0)).toThrow("Game is finished!")
});