import {O, X} from "./state";
import {alternateTurn} from "./turn-alternator";

test('alternate turns', () => {

    expect(alternateTurn(X)).toBe(O);
    expect(alternateTurn(O)).toBe(X);
});

test('throw on invalid turn', () => {

    expect(() => alternateTurn(undefined)).toThrow('Expecting turn X or O, got: undefined');
    expect(() => alternateTurn(null)).toThrow('Expecting turn X or O, got: null');
    expect(() => alternateTurn(42)).toThrow('Expecting turn X or O, got: 42');
    expect(() => alternateTurn('abc')).toThrow('Expecting turn X or O, got: abc');
});

