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

const displayController = (() => {
    let selection = 'X';
    let nextTurn = {
        'X': 'O',
        'O': 'X',
    }

    const gameArray = document.querySelectorAll('.game-array').forEach((item) => {
        item.addEventListener('click', () => {
            item.textContent = selection;
            selection = nextTurn[selection];
        });
    });
    
    return {
        gameArray,
    }
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

