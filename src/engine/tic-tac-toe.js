import {_, O, X} from "./constants";

let board;
let lastMark;

export function startGame() {
    lastMark = O;
    board = [
        [_, _, _],
        [_, _, _],
        [_, _, _],
    ];
}

export function getBoard() {
    return board;
}

export function markBoard(row, column) {

    const nextMark = lastMark === O ? X : O;

    board[row][column] = nextMark;

    lastMark = nextMark;
}
