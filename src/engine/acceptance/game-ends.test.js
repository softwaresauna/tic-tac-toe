import {createInitialState, NONE, O, X, _} from "../state";
import {move} from "../engine";

let state;

beforeEach(() => {
    state = createInitialState();
});


test('X wins', () => {

    makeMove(1, 1);
    makeMove(0, 2);
    makeMove(0, 0);
    makeMove(2, 2);
    makeMove(1, 2);
    makeMove(2, 1);
    makeMove(1, 0);

    expectStatus(X_WINS);

    expectBoard([
        [X, _, O],
        [X, X, X],
        [_, O, O]
    ]);

});

test('O wins', () => {

    makeMove(1, 0);
    makeMove(1, 1);
    makeMove(0, 2);
    makeMove(0, 0);
    makeMove(2, 1);
    makeMove(2, 2);

    expectStatus(O_WINS);

    expectBoard([
        [O, _, X],
        [X, O, _],
        [_, X, O]
    ]);

});

test('a draw', () => {

    makeMove(0, 0);
    makeMove(0, 1);
    makeMove(1, 1);
    makeMove(2, 2);
    makeMove(2, 0);
    makeMove(1, 0);
    makeMove(1, 2);
    makeMove(0, 2);
    makeMove(2, 1);

    expectStatus(DRAW);

    expectBoard([
        [X, O, O],
        [O, X, X],
        [X, X, O]
    ]);

});

test('a draw', () => {

    makeMove(0, 0);
    makeMove(0, 1);
    makeMove(1, 1);
    makeMove(2, 2);

    expectStatus(IN_PROGRESS);

    expectBoard([
        [X, O, _],
        [_, X, _],
        [_, _, O]
    ]);

});

function makeMove(row, column) {
    state = move(state, row, column);
}

function expectStatus(expectedStatus) {
    expect(state).toBeDefined();
    expect(state.status).toBe(expectedStatus);
}

function expectBoard(expectedBoard) {
    expect(state).toBeDefined();
    expect(state.board).toEqual(expectedBoard);
}
