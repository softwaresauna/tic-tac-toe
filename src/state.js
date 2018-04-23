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