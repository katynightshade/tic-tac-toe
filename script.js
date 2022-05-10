const makeGameboard = (() => {
    let gameboard = new Array(9);
    let gameArray = document.querySelectorAll('.game-array');
    for (let i = 0; i < gameboard.length; i++) {
        for (let i = 0; i < gameArray.length; i++) {
           gameboard[i] = gameArray[i].textContent;
        }
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

