export const createInitialState = () => {

    return {

        board: [
            [_, _, _],
            [_, _, _],
            [_, _, _]
        ],

        turn: X,
        finished: false,
        winner: undefined
    };
}

export const
    X = 'x',
    O = 'o',
    _ = '',
    NONE = undefined;