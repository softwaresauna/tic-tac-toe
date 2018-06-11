import {getStatus} from "./status-resolver";
import {_, createInitialState, DRAW, IN_PROGRESS, O, O_WON, X, X_WON} from "./state";


describe('when there is a winner', () => {

    const anyBoard = [[_]];

    test('throw when invalid winner value', () => {

        const winner = 'invalid-winner-constant';

        expect(() =>
            getStatus(winner, anyBoard))
            .toThrow('Invalid winner value! Expected X or O: ' + winner);
    });

    test('maps to won status if winner is known', () => {

        expect(getStatus(X, anyBoard)).toEqual(X_WON);
        expect(getStatus(O, anyBoard)).toEqual(O_WON);
    });
});


describe('when there is no winner', () => {

    test('a draw status when board is full', () => {

        expect(getStatus(undefined, [
            [X, X, X],
            [X, X, X],
            [X, X, X]
        ])).toEqual(DRAW);

        expect(getStatus(undefined, [
            [O, O, O],
            [O, O, O],
            [O, O, O]
        ])).toEqual(DRAW);

        expect(getStatus(undefined, [
            [X, O, X],
            [X, O, X],
            [O, X, O]
        ])).toEqual(DRAW);
    });

    test('in progress status when board is not full', () => {

        expect(getStatus(undefined, [
            [X, X, X],
            [X, _, X],
            [X, X, X]
        ])).toEqual(IN_PROGRESS);

        expect(getStatus(undefined, [
            [X, X, X],
            [_, X, X],
            [X, X, X]
        ])).toEqual(IN_PROGRESS);

        expect(getStatus(undefined, [
            [X, X, _],
            [X, X, X],
            [X, X, X]
        ])).toEqual(IN_PROGRESS);

        expect(getStatus(undefined, [
            [X, _, X],
            [_, X, X],
            [X, X, _]
        ])).toEqual(IN_PROGRESS);

        expect(getStatus(undefined, [
            [_, _, _],
            [_, _, _],
            [_, _, _]
        ])).toEqual(IN_PROGRESS);
    });
});
