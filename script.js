"use strict";

//array is not populating on click
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
        const playerMsg = document.getElementById('player-msg');
        const winnerMsg = document.getElementById('winner-msg');
        winnerMsg.textContent = message;
        playerMsg.style.display = 'none';
    }

    const setResultMessage = (winner) => {
        if  (winner === 'Draw') {
            setMessage("It's a tie!");
        } else {
            setMessage(`Player ${winner} wins!`);
        }
    }
    
    return {
        gameArray,
        resetBtn,
        setResultMessage,
    }
})();

function Player (sign) {
    this.sign = sign;

    const getSign = () => {
        return sign;
    }

    return {
        getSign,
    }
}

const gameFlow = (() => {
    let playerX = new Player('X');
    let playerO = new Player('O');
    let round = 1;
    const gameContainer = document.querySelector('.game-container');
    const gameArray = document.querySelectorAll('.game-array');
    let winner;

    const roundUp = () => {
        gameContainer.addEventListener('click', () => {
            round++;
        });
        if (round === 9) {
            displayController.setResultMessage('Draw');
        }
    }

    const determineWinner = () => {
    
    }

    const resetBoard = () => {
        window.location.reload();
    }

    const gameOver = () => {
        if (winner == 'X') {
            displayController.setResultMessage('X');
        } else if (winner == 'O') {
            displayController.setResultMessage('O');
        }
        resetBoard();

    }

    return {
        roundUp,
    }
})();

