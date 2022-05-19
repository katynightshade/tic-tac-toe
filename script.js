//array is not populating on click
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

    const gameArray = document.querySelectorAll('.game-array').forEach((item) => {
        item.addEventListener('click', function placeItems(e) {
            if (item.textContent !== '') return;
            makeBoard.board[e.target.id] = selection;
            item.textContent = selection;
            selection = nextTurn[selection];
            if (gameFlow.winner === true) {
                item.removeEventListener('click', placeItems());
            }
            gameFlow.round += 1;
            gameFlow.winnerCheck();
            if (gameFlow.winner === false) {
                if (gameFlow.round < 9) {
                    gameFlow.nextPlayer;
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
    return {
        sign,
    }
}

const gameFlow = (() => {
    let playerX = Player('X');
    let playerO = Player('O');
    let round = 0;
    let winner = false;
    let activePlayer = playerX;
    let playerTurn = {
        playerX : playerO,
        playerO : playerX,
    }

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
            winnerMsg.textContent = `Player ${activePlayer.sign} wins!`;
            playerMsg.style.display = 'none';
            winner = true;
        }
    }

    function nextPlayer() {
        activePlayer = playerTurn[activePlayer];
    }

    function declareTie() {
        winnerMsg.textContent = 'Tied game!';
        playerMsg.style.display = 'none';
    }

    return {
        round,
        winner,
        activePlayer,
        nextPlayer,
        winnerCheck, 
        declareTie,
    }
})();

