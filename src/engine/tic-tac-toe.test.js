import {getBoard, markBoard, startGame} from "./tic-tac-toe";
import {_, O, X} from "./constants";

it('the board is initially empty', () => {

    startGame();
    const board = getBoard();

    expect(board).toEqual([
        [_, _, _],
        [_, _, _],
        [_, _, _],
    ]);
});

it('X starts first', () => {

    startGame();
    markBoard(1, 2);

    const board = getBoard();

    expect(board).toEqual([
        [_, _, _],
        [_, _, X],
        [_, _, _],
    ]);
});

it('after X comes O', () => {

    startGame();
    markBoard(2, 1);
    markBoard(0, 2);

    const board = getBoard();

    expect(board).toEqual([
        [_, _, O],
        [_, _, _],
        [_, X, _],
    ]);
});

it('X and O alternate', () => {

    startGame();
    markBoard(2, 1);
    markBoard(0, 2);
    markBoard(1, 1);
    markBoard(0, 0);

    const board = getBoard();

    expect(board).toEqual([
        [O, _, O],
        [_, X, _],
        [_, X, _],
    ]);
});


