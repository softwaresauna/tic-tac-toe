import {_, X} from "./constants";

export function makeMove(oldState, row, column) {

    const newState = {};

    const newBoard = makeMarkOnBoard(
        oldState.board,
        oldState.nextMark,
        row,
        column);

    newState.board = newBoard;
    newState.nextMark = getNextMark(oldState.nextMark);

    return newState;
}

export function makeMarkOnBoard(board, mark, row, column) {



    if (row < 0) {
        throw 'Out of bounds!';
    }

    if (board[row][column] !== _) {
        throw 'Space already occupied!';
    }


    board[row][column]  = mark;

    return board;


}
