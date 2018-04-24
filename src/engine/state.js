export const createInitialState = () => {

    return {

        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],

        turn: 'x',
        finished: false,
        winner: undefined
    };
}

export const
    X = 'x',
    O = 'o',
    NONE = undefined;