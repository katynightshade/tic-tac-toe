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
    const playerMessage = document.getElementById('player-msg');

    const gameArray = document.querySelectorAll('.game-array').forEach((item) => {
        item.addEventListener('click', function placeItems() {
            if (item.textContent !== '') return;
            item.textContent = selection;
            selection = nextTurn[selection];
        });
    });

    const setMessage = (message) => {
        playerMessage.textContent = message;
    }
    
    return {
        gameArray,
        setMessage,
    }
})();

const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    }

    return {
        getSign,
    }
}

const gameFlow = (() => {
    let playerX = Player('X');
    let playerO = Player('O');
    let round = 1;

    const getPlayerSign = () => {
        return round % 2 === 1 ? playerX.getSign() : playerO.getSign();
    }

    displayController.setMessage(`Player ${getPlayerSign}'s Turn`)

    return {
        getPlayerSign,

    }
})();

