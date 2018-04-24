import {isFinished} from "./finish-resolver";
import {_, createInitialState, O, X} from "./state";

test('finished if winner is known', () => {

    const emptyBoard = [[_]];

    expect(isFinished('foo', emptyBoard)).toBeTruthy();
    expect(isFinished(undefined, emptyBoard)).toBeFalsy();
});

test('finished if winner is unknown but board is full', () => {

    expect(isFinished(undefined, [
        [X, X, X],
        [X, X, X],
        [X, X, X]
    ])).toBeTruthy();

    expect(isFinished(undefined, [
        [O, O, O],
        [O, O, O],
        [O, O, O]
    ])).toBeTruthy();

    expect(isFinished(undefined, [
        [X, O, X],
        [X, O, X],
        [O, X, O]
    ])).toBeTruthy();

    expect(isFinished(undefined, [
        [X, X, X],
        [X, _, X],
        [X, X, X]
    ])).toBeFalsy();

    expect(isFinished(undefined, [
        [X, X, X],
        [_, X, X],
        [X, X, X]
    ])).toBeFalsy();

    expect(isFinished(undefined, [
        [X, X, _],
        [X, X, X],
        [X, X, X]
    ])).toBeFalsy();

    expect(isFinished(undefined, [
        [X, _, X],
        [_, X, X],
        [X, X, _]
    ])).toBeFalsy();

    expect(isFinished(undefined, [
        [_, _, _],
        [_, _, _],
        [_, _, _]
    ])).toBeFalsy();
});
