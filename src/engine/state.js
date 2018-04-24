export const createInitialState = () => {

    return {

        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],

        turn: X,
        finished: false,
        winner: undefined
    };
}

export const
    X = 'x',
    O = 'o',
    NONE = undefined;