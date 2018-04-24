import {createInitialState, NONE, O, X} from "./state";
import {move} from "./engine";

let state;

const makeMove = (row, column) => {
    state = move(state, row, column);
};

const expectWinner = (expectedWinner) => {
    expect(state).toBeDefined();
    expect(state.finished).toBeTruthy();
    expect(state.winner).toBe(expectedWinner);
};

const expectBoard = (expectedBoard) => {
    expect(state).toBeDefined();
    expect(state.board).toBe(expectedBoard);
};


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

    expectWinner(X);

    expectBoard([
        [X, '', O],
        [X, X, X],
        ['', O, O]
    ]);

});

test('O wins', () => {

    makeMove(1, 0);
    makeMove(1, 1);
    makeMove(0, 2);
    makeMove(0, 0);
    makeMove(2, 1);
    makeMove(2, 2);

    expectWinner(O);

    expectBoard([
        [O, '', X],
        [X, O, ''],
        ['', X, O]
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

    expectWinner(NONE);

    expectBoard([
        [X, O, O],
        [O, X, X],
        [X, X, O]
    ]);

});
