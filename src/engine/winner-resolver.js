import {_} from "./state";

export function getWinner(board) {


    const fullHorizontal = board
        .filter(row => row[0] !== _)
        .find(row => allMarksSame(row));

    return fullHorizontal ? fullHorizontal[0] : undefined;
}

function allMarksSame(marks) {

    return marks.every(mark => mark === marks[0]);
}