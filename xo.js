const statusDisplay = document.querySelector('.message');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winingTable = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]

];
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(event) {
    
    if (gameActive == true) {
        let indexgameState = Number(event.target.id) - 1;

        if (gameState[indexgameState] === '') {
            gameState[indexgameState] = currentPlayer;
            event.target.innerText = currentPlayer;
            let situ = evaluteGameStatus();
            debugger;
            switch (situ) {
                case 0:
                    statusDisplay.innerHTML = winningMessage();
                    gameActive = false;
                    break;
                case 1:
                    statusDisplay.innerHTML = drawMessage();
                    gameActive = false;
                    break;
            }
            if (gameActive == true) {
                handlePlayerChange();
            }

        } else {
            window.alert(` این خانه قبلا توسط پر شده است${event.target.innerHTML}`);
        }
    } else {
        window.alert('بازی به اتمام رسیده روی دکمه Restart بزنید');
    }

}


function handlePlayerChange() {

    if (currentPlayer === 'O') {
        currentPlayer = 'X';
        currentPlayerTurn();
        statusDisplay.innerHTML = currentPlayerTurn();
    } else {
        currentPlayer = 'O';
        currentPlayerTurn();
        statusDisplay.innerHTML = currentPlayerTurn();
    }
}


function evaluteGameStatus() {

    let tempArray;
    let isEmpty = false;
    let situ = -1;
    for (let index = 0; index < 8; index++) {
        tempArray = winingTable[index];
        let a = gameState[tempArray[0]];
        let b = gameState[tempArray[1]];
        let c = gameState[tempArray[2]];
        if (a === '' | b === '' | c === '') {
            continue;
        }
        if (a === b && b === c) {

            situ = 0;
            return situ;
        }

        isEmpty = gameState.includes('');

        if (isEmpty == false) {
            situ = 1;
            return situ;
        }
    }

}

function handleRestartGame() {
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    for (let index = 1; index < 10; index++) {
        document.getElementById(`${index}`).innerHTML = '';

    }
    currentPlayer = 'X';
    statusDisplay.innerHTML = currentPlayerTurn();
}
