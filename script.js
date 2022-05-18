"use strict";

//array is not populating on click
const makeGameboard = (() => {
    let gameboard = new Array();
    let gameArray = document.querySelectorAll('.game-array');

    for (let i = 0; i < gameArray.length; i++) {
        gameboard.push(gameArray[i].textContent);
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
    const playerMsg = document.getElementById('player-msg');
    const winnerMsg = document.getElementById('winner-msg');

    const gameArray = document.querySelectorAll('.game-array').forEach((item) => {
        item.addEventListener('click', function placeItems(e) {
            if (item.textContent !== '') return;
            makeGameboard.gameboard[e.target.id] = selection;
            item.textContent = selection;
            selection = nextTurn[selection];
            if (gameFlow.winner = true) {
                item.removeEventListener('click', placeItems());
            }
        });
    });

    const resetBtn = document.getElementById('reset-btn').addEventListener('click', () => {
        window.location.reload();
    });

    const setMessage = (message) => {
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
    let round = 0;
    const gameContainer = document.querySelector('.game-container');
    const gameArray = document.querySelectorAll('.game-array');
    let winner = false;

    const roundUp = () => {
        gameContainer.addEventListener('click', function increaseRound() {
            round += 1;
            if (round === 9) {
                displayController.setResultMessage('Draw');
            };
            console.log(gameFlow.round);
            if (winner = true) {
                gameContainer.removeEventListener('click', increaseRound());
            };
        });
    }

    const determineWinner = () => {
        if (makeGameboard.gameboard[0] === 'X' && makeGameboard.gameboard[1] === 'X' && makeGameboard.gameboard[2] === 'X') {
            this.winner = true;
            displayController.setMessage(`Player X Wins!`);
        }
    }

    const resetBoard = () => {
        window.location.reload();
    }

    const gameOver = () => {

    }

    return {
        winner,
        round,
        roundUp,
        determineWinner,
    }
})();

