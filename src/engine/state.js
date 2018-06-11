export const createInitialState = () => {

    return {

        board: [
            [_, _, _],
            [_, _, _],
            [_, _, _]
        ],

        turn: X,
        status: IN_PROGRESS
    };
};

export const
    X = 'x',
    O = 'o',
    _ = '',
    NONE = undefined;

export const
    X_WON = 'X won',
    O_WON = 'O won',
    DRAW = 'a draw',
    IN_PROGRESS = 'in progress';