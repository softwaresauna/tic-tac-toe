import {_} from "./state";

export function markBoard(board, mark, row, column) {

    if (!markWithinBoard(board, row, column)) {
        throw 'Coordinates outside of board!'
    }

    if (board[row][column] !== _) {
        return board;
    }

    const newBoard = copyBoard(board);

    newBoard[row][column] = mark;

    return newBoard;
}

function markWithinBoard(board, row, column) {

    return row >= 0 && column >= 0 && row < board.length && column < board[row].length;
}

function copyBoard(board) {
    return board.map(row => row.slice());
}
