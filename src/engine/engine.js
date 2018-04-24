import {alternateTurn} from "./turn-alternator";

export function move(gameState, row, column) {

    console.log("move: ", gameState, "cell: " + row + ", " + column);

    const nextBoard = putPieceOnBoard(gameState, row, column);
    const winner = calculateWinner(nextBoard);

    const nextGameState = {};
    nextGameState.board = nextBoard;
    nextGameState.turn = alternateTurn(gameState.turn);
    nextGameState.winner = winner;
    nextGameState.finished = isFinished(winner, nextBoard);

    return nextGameState;
}