import {_, DRAW, IN_PROGRESS, O, O_WON, X, X_WON} from "./state";

export function getStatus(winner, board) {

    if (winner !== undefined) return resolveWinner(winner);

    return boardHasSpace(board) ? IN_PROGRESS : DRAW;
}

function resolveWinner(winner) {

    switch (winner){
        case X: return X_WON;
        case O: return O_WON;
    }

    throw 'Invalid winner value! Expected X or O: ' + winner;
}

function boardHasSpace(board) {

    return board
        .some(row => row
            .some(cell => cell === _));
}
