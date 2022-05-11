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
        message = winnerMsg.textContent
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
    const boxOne = document.getElementById('box1');
    const boxTwo = document.getElementById('box2');
    const boxThree = document.getElementById('box3');
    const boxFour = document.getElementById('box4');
    const boxFive = document.getElementById('box5');
    const boxSix = document.getElementById('box6');
    const boxSeven = document.getElementById('box7');
    const boxEight = document.getElementById('box8');
    const boxNine = document.getElementById('box9');

    const determineWinner = () => {
        if (boxOne.textContent === 'X' && boxTwo.textContent === 'X' && boxThree.textContent === 'X') {
            displayController.setMessage('Player X wins!');
        }
    }

    return {
        determineWinner,
    }
})();

