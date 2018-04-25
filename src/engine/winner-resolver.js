import {_} from "./state";

export function getWinner(board) {


    const winningLine = getAllLines(board)
        .filter(row => row[0] !== _)
        .find(row => allMarksSame(row));

    return winningLine ? winningLine[0] : undefined;
}

function getAllLines(board) {

    const lines = [];

    board.forEach(row => lines.push(row));

    const
        diagonal1 = [],
        diagonal2 = [];


    for (let columnIndex = 0; columnIndex < board[0].length; columnIndex++) {
        const column = [];

        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {

            const element = board[rowIndex][columnIndex];

            column.push(element);

            if (rowIndex === columnIndex) diagonal1.push(element);
            if (board.length - 1 - rowIndex === columnIndex) diagonal2.push(element);

        }

        lines.push(column);

    }

    lines.push(diagonal1, diagonal2);

    return lines;
}


function allMarksSame(marks) {

    return marks.every(mark => mark === marks[0]);
}