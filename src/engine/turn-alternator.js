import {O, X} from "./state";

export function alternateTurn(turn) {

    if (turn === X) return O;
    if (turn === O) return X;

    throw 'Expecting turn X or O, got: ' + turn;
}
