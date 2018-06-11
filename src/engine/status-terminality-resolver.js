import {DRAW, IN_PROGRESS, O_WON, X_WON} from "./state";

export function isStatusTerminal(status) {

    switch (status) {
        case X_WON:
        case O_WON:
        case DRAW:
            return true;
        case IN_PROGRESS:
            return false;
    }

    throw 'Invalid status constant: ' + status;
}