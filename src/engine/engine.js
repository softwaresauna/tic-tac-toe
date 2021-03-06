import {alternateTurn} from "./turn-alternator";
import {getStatus} from "./status-resolver";
import {markBoard} from "./board-marker";
import {getWinner} from "./winner-resolver";
import {isStatusTerminal} from "./status-terminality-resolver";

export function move(gameState, row, column) {

    if (isStatusTerminal(gameState.status)) {
        return gameState;
    }

    const nextBoard = markBoard(gameState.board, gameState.turn, row, column);
    const winner = getWinner(nextBoard);

    const nextGameState = {};
    nextGameState.board = nextBoard;
    nextGameState.turn = alternateTurn(gameState.turn);
    nextGameState.status = getStatus(winner, nextBoard);

    return nextGameState;
}