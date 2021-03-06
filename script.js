const Player = (sign) => {
    return {
        sign,
    }
}

const makeBoard = (() => {
    let board = new Array();
    let gameArray = document.querySelectorAll('.game-array');

    for (let i = 0; i < gameArray.length; i++) {
        board.push(gameArray[i].textContent);
    }

    return {
        board,
        gameArray,
    }
})();

const displayController = (() => {
    let selection = 'X';
    let nextTurn = {
        'X': 'O',
        'O': 'X',
    }
    let playerX = Player('X');
    let playerO = Player('O');    

    function activePlayer() {
        let current;
        let round = gameFlow.round;
        if (round == 1 || round == 3 || round == 5 || round == 7 || round == 9) {
            current = playerX;
        } else {
            current = playerO;
        }
        return current.sign;
    }

    const gameArray = document.querySelectorAll('.game-array').forEach((item) => {
        item.addEventListener('click', function placeItems(e) {
            if (item.textContent !== '' || gameFlow.winner == true) return;
            makeBoard.board[e.target.id] = selection;
            item.textContent = selection;
            selection = nextTurn[selection];
            gameFlow.round += 1;
            gameFlow.winnerCheck();
            if (gameFlow.round < 9) {
                activePlayer();
            } else if (gameFlow.round === 9 && gameFlow.winner === false) {
                gameFlow.declareTie();
            };
        });
    });

    const resetBtn = document.getElementById('reset-btn').addEventListener('click', () => {
        window.location.reload();
    });
    
    return {
        activePlayer,
        gameArray,
        resetBtn,
    }
})();

const gameFlow = (() => {
    let round = 0;
    let winner = false;    

    const winnerMsg = document.getElementById('winner-msg');
    const playerMsg = document.getElementById('player-msg');

    function winnerCheck() {
        let board = makeBoard.board;
        if (
            (board[0] === board[1] && board[1] === board[2] && board[0] === board[2] && board[0] !== '' && board[1] !== '' && board[2] !== '') ||
            (board[3] === board[4] && board[4] === board[5] && board[3] === board[5] && board[3] !== '' && board[4] !== '' && board[5] !== '') ||
            (board[6] === board[7] && board[7] === board[8] && board[6] === board[8] && board[6] !== '' && board[7] !== '' && board[8] !== '') ||
            (board[0] === board[3] && board[3] === board[6] && board[0] === board[6] && board[0] !== '' && board[3] !== '' && board[6] !== '') ||
            (board[1] === board[4] && board[4] === board[7] && board[1] === board[7] && board[1] !== '' && board[4] !== '' && board[7] !== '') ||
            (board[2] === board[5] && board[5] === board[8] && board[2] === board[8] && board[2] !== '' && board[5] !== '' && board[8] !== '') ||
            (board[0] === board[4] && board[4] === board[8] && board[0] === board[8] && board[0] !== '' && board[4] !== '' && board[8] !== '') ||
            (board[2] === board[4] && board[4] === board[6] && board[2] === board[6] && board[2] !== '' && board[4] !== '' && board[6] !== '')
        ) {
            winnerMsg.textContent = `Player ${displayController.activePlayer()} wins!`;
            playerMsg.style.display = 'none';
            this.winner = true;
            console.log(`Player ${displayController.activePlayer()} wins!`);
        } else {
            this.winner = false;
        }
    }

    function declareTie() {
        winnerMsg.textContent = 'Tied game!';
        playerMsg.style.display = 'none';
        console.log('Tied game!');
    }

    return {
        round,
        winner,
        winnerCheck, 
        declareTie,
    }
})();