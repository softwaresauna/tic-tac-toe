import {_, NONE, O, X} from "./state";
import {getWinner} from "./winner-resolver";

test('empty lines do not count', () => {

    expect(
        getWinner([
            [_, _, _],
            [_, _, _],
            [_, _, _],
        ]))
        .toBe(NONE);

});

test('full horizontals win', () => {

    expect(
        getWinner([
            [X, X, X],
            [_, O, O],
            [_, _, _],
        ]))
        .toBe(X);

    expect(
        getWinner([
            [_, _, O],
            [X, X, X],
            [_, _, _],
        ]))
        .toBe(X);

    expect(
        getWinner([
            [_, _, _],
            [O, _, O],
            [X, X, X],
        ]))
        .toBe(X);
});

test('full verticals win', () => {

    expect(
        getWinner([
            [X, _, X],
            [X, O, O],
            [X, _, O],
        ]))
        .toBe(X);

    expect(
        getWinner([
            [_, X, O],
            [O, X, _],
            [_, X, O],
        ]))
        .toBe(X);

    expect(
        getWinner([
            [_, _, X],
            [O, _, X],
            [X, O, X],
        ]))
        .toBe(X);
});

test('full diagonals win', () => {

    expect(
        getWinner([
            [X, _, O],
            [O, X, O],
            [O, _, X],
        ]))
        .toBe(X);

    expect(
        getWinner([
            [_, X, X],
            [O, X, _],
            [X, O, O],
        ]))
        .toBe(X);
});