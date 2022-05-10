const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    };

    return { getSign };
}

const makeGameboard = (() => {
    let pieceArray = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    const setBoard = (index, sign) => {
        pieceArray[index] = sign;
    };

    const getBoard = (index) => {
        return pieceArray[index];
    };

    const reset = () => {
        for (let i = 0; i < pieceArray.length; i++) {
            pieceArray[i] = '';
        };
    };

    return {
        setBoard,
        getBoard,
        reset,
    }
})();

const gameFlow = () => {

}

