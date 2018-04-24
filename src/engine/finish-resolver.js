import {_} from "./state";

export function isFinished(winner, board) {

    if (winner !== undefined) return true;

    return !boardHasSpace(board);
}

function boardHasSpace(board) {

    return board
        .some(row => row
            .some(cell => cell === _));
}
