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