import {_, O, X} from "./state";
import {markBoard} from "./board-marker";

test('mark empty cell', () => {

    expect(
        markBoard(
            [
                [_, _],
                [_, _]
            ],
            X, 0, 0
        )).toEqual(
        [
            [X, _],
            [_, _]
        ]);

    expect(
        markBoard(
            [
                [_, _],
                [X, _]
            ],
            O, 0, 1
        )).toEqual(
        [
            [_, O],
            [X, _]
        ]);

    expect(
        markBoard(
            [
                [X, X],
                [X, _]
            ],
            O, 1, 1
        )).toEqual(
        [
            [X, X],
            [X, O]
        ]);


});

test('do not modify old board', () => {

    const oldBoard = [
        [_, _],
        [_, _]
    ];

    markBoard(oldBoard, X, 0, 0);

    expect(oldBoard).toEqual(
        [
            [_, _],
            [_, _]
        ]);

});

test('ignore marking occupied cell', () => {

    expect(
        markBoard(
            [
                [_, X],
                [_, _]
            ],
            O, 0, 1
        ))
        .toEqual(
            [
                [_, X],
                [_, _]
            ]
        );
});

const emptyBoard = [[_, _], [_, _]];

test('reject marking outside of board', () => {

    rejectMarkOutsideOfBoard(0, 2);
    rejectMarkOutsideOfBoard(0, 3);
    rejectMarkOutsideOfBoard(2, 0);
    rejectMarkOutsideOfBoard(-1, 1);
    rejectMarkOutsideOfBoard(0, -1);
    rejectMarkOutsideOfBoard(-1, -1);
    rejectMarkOutsideOfBoard(-2, 0);

});

function rejectMarkOutsideOfBoard(row, column) {

    expect(() => markBoard(emptyBoard, X, row, column)).toThrow('Coordinates outside of board!')
}