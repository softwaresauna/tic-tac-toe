import {makeMarkOnBoard} from "./engine";
import {_, O, X} from "./constants";

test('make mark on board', () => {

    example(
        [
            [_, _],
            [_, _]
        ],
        X, 0, 0,
        [
            [X, _],
            [_, _]
        ]);

    example([[X, _], [_, _]], X, 0, 1, [[X, X], [_, _]]);
    example([[X, _], [_, _]], O, 1, 1, [[X, _], [_, O]]);


    function example(board, mark, row, column, expectedBoard) {

        expect(makeMarkOnBoard(board, mark, row, column)).toEqual(expectedBoard);
    }

});

test('throw when coordinate out of bounds', () => {

    throwExample([[_, _], [_, _]], X, -1, 0, 'Out of bounds!');
    throwExample([[_, _], [_, _]], X, -2, 0, 'Out of bounds!');
    throwExample([[_, _], [_, _]], X, -12, 0, 'Out of bounds!');
    throwExample([[_, _], [_, _]], X, -42, 0, 'Out of bounds!');


});

function throwExample(board, mark, row, column, expectedErrorMessage) {

    expect(() => makeMarkOnBoard(board, mark, row, column))
        .toThrow(expectedErrorMessage);
}

test('making mark on existing mark is not allowed', () => {

    throwExample(
        [
            [X, _],
            [_, _]
        ],
        O, 0, 0,
        'Space already occupied!');
});

xtest('old board is not modified', () => {

    const oldBoard = [[X, O], [_, X]];

    makeMarkOnBoard(oldBoard, X, 1, 0);

    expect(oldBoard).toEqual([[X, O], [_, X]]);

});
