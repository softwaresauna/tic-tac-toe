import {alternateTurn} from "./turn-alternator";
import {isFinished} from "./finish-resolver";
import {markBoard} from "./board-marker";

export function move(gameState, row, column) {

    console.log("move: ", gameState, "cell: " + row + ", " + column);

    const nextBoard = markBoard(gameState.board, gameState.turn, row, column);
    const winner = calculateWinner(nextBoard);

    const nextGameState = {};
    nextGameState.board = nextBoard;
    nextGameState.turn = alternateTurn(gameState.turn);
    nextGameState.winner = winner;
    nextGameState.finished = isFinished(winner, nextBoard);

    return nextGameState;
}