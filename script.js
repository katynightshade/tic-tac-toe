const makeGameboard = (() => {
    let gameboard = new Array();
    for (let i = 0; i < gameboard.length; i++) {
        gameboard[i].fill(document.querySelectorAll('.game-array').values);
    }

    return {
        gameboard,
    }
})();

console.log(makeGameboard);

const displayController = (() => {

})();

const Player = (sign) => {
    const getSign = () => {
        return sign;
    }

    return {
        getSign,
    }
}

const gameFlow = () => {

}

