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

    const gameArray = document.querySelectorAll('.game-array').forEach((item) => {
        item.addEventListener('click', function placeItems(e) {
            if (item.textContent !== '') return;
            makeGameboard.gameboard[e.target.id] = selection;
            item.textContent = selection;
            selection = nextTurn[selection];
            if (gameFlow.winner = true) {
                item.removeEventListener('click', placeItems());
            }
            gameFlow.round += 1;
            gameFlow.winnerCheck();
            if (gameFlow.winner === false) {
                if (gameFlow.round < 9) {
                    gameFlow.checkPlayer();
                } else if (gameFlow.round === 9) {
                    gameFlow.declareTie();
                };
            };
        });
    });

    const resetBtn = document.getElementById('reset-btn').addEventListener('click', () => {
        window.location.reload();
    });
    
    return {
        gameArray,
        resetBtn,
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

    let activePlayer = playerX;
    let round = 0;
    let winner = false;

    const winnerMsg = document.getElementById('winner-msg');
    const playerMsg = document.getElementById('player-msg');

    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    function winnerCheck() {
        winningCombos.forEach((item, index) => {
            if (makeGameboard.gameboard[item[0]] === this.activePlayer.getSign && makeGameboard.gameboard[item[1]] === this.activePlayer.getSign && makeGameboard.gameboard[item[2]] === this.activePlayer.getSign) {
                winnerMsg.textContent = `Player ${activePlayer.getSign} wins!`;
                playerMsg.style.display = 'none';
                this.winner = true;
            }
        });
    }

    function checkPlayer() {
        this.activePlayer === playerX ? this.activePlayer = playerO : this.activePlayer = playerX;
        console.log('active player:' + activePlayer.getSign);
    }

    function declareTie() {
        winnerMsg.textContent = 'Tied game!';
    }

    return {
        activePlayer,
        round,
        winner,
        winnerCheck, 
        checkPlayer,
        declareTie,
    }
})();

