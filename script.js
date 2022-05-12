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
        gameArray,
    }
})();

const displayController = (() => {
    let selection = 'X';
    let nextTurn = {
        'X': 'O',
        'O': 'X',
    }
    const winnerMsg = document.getElementById('winner-msg');

    const gameArray = document.querySelectorAll('.game-array').forEach((item) => {
        item.addEventListener('click', function placeItems() {
            if (item.textContent !== '') return;
            item.textContent = selection;
            selection = nextTurn[selection];
        });
    });

    const resetBtn = document.getElementById('reset-btn').addEventListener('click', () => {
        window.location.reload();
    });

    const setMessage = (message) => {
        winnerMsg.textContent = message;
    }
    
    return {
        gameArray,
        resetBtn,
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
    let round = 1;
    const gameContainer = document.querySelector('.game-container');

    const roundUp = () => {
        gameContainer.addEventListener('click', () => {
            round++;
        });
        if (round === 9) {
            displayController.setMessage("It's a tie!");
        }
    }

    const determineWinner = () => {
        
    }

    return {
        roundUp,
        determineWinner,
    }
})();

