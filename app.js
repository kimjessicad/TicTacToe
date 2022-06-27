//--enter names and have them displayed
// have order chosen for us by the game
// --- take turns placing marks in empty spaces
// --- not be able to place a mark in an occupied spaces
// --- be told when a move causes a player to win, or to draw
//--start the game over without having to reset the browser

// one player game see the name 'Computer' displayed as my opponent
// have the Computer make moves as if it were a human player

// EXTRA 
// have the computer make a "better than gussing" move
// customize board size


const statusBox = document.querySelector('.statusBox');
const gameRestart = document.querySelector('.restart');
const gameBoxes = document.querySelectorAll('.box')

//Enter names and have them displayed
const player1Input = document.querySelector("#player1Input");
const player2Input = document.querySelector("#player2Input");
let player1Name;
let player2Name;
player1Input.addEventListener('keypress', (event) => {
    if (event.key === "Enter" && player1Input.value.length > 0) {
        player1Name = player1Input.value;
        player1Input.style.display = "none"
        player1_name.innerHTML = "Player 1 (X): " + player1Input.value;
        player1_name.style.color = "white";
        player1_name.style.fontSize = "30px";
        player1_name.style.border = "1px solid white";
    }
})
player2Input.addEventListener('keypress', (event) => {
    if (event.key === "Enter" && player2Input.value.length > 0) {
        player2Name = player2Input.value;
        player2Input.style.display = "none"
        player2_name.innerHTML = "Player 2 (O): " + player2Input.value;
        player2_name.style.color = "white";
        player2_name.style.fontSize = "30px";
        player2_name.style.border = "1px solid white";
    }
})

//alternating players

const player1 = "X"
const player2 = "O"

let currentPlayer = player1

function changePlayer() {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
    return currentPlayer
}

//win conditions
let winner = null

const checkGameStatus = () => {
    let box1 = gameBoxes[0].classList[2];
    let box2 = gameBoxes[1].classList[2];
    let box3 = gameBoxes[2].classList[2];
    let box4 = gameBoxes[3].classList[2];
    let box5 = gameBoxes[4].classList[2];
    let box6 = gameBoxes[5].classList[2];
    let box7 = gameBoxes[6].classList[2];
    let box8 = gameBoxes[7].classList[2];
    let box9 = gameBoxes[8].classList[2];
    console.log(box1, box2, box3, box4, box5, box6, box7, box8, box9)

    // let game = [[box1, box2, box3],
    // [box4, box5, box6],
    // [box7, box8, box9]];

    //     let row1 = [box1, box2, box3];
    //     let row2 = [box4, box5, box6];
    //     let row3 = [box7, box8, box9];
    //     let col1 = [box1, box4, box7];
    //     let col2 = [box2, box5, box8];
    //     let col3 = [box3, box6, box9];
    //     let diag1 = [box1, box5, box9];
    //     let diag2 = [box3, box5, box7];
    // console.log (row1)

    if (box1 && box1 === box2 && box1 === box3) { //row1. first check is for !undefined
        winner = box1;
        statusBox.innerHTML = `${winner} wins!`;
    } else if (box4 && box4 === box5 && box4 === box6) { //row2
        winner = box4;
        statusBox.innerHTML = `${winner} wins!`;
    } else if (box7 && box7 === box8 && box7 === box9) { //row3
        winner = box7;
        statusBox.innerHTML = `${winner} wins!`;
    } else if (box1 && box1 === box4 && box1 === box7) { //col1
        winner = box1;
        statusBox.innerHTML = `${winner} wins!`;
    } else if (box2 && box2 === box5 && box2 === box8) { //col2
        winner = box2;
        statusBox.innerHTML = `${winner} wins!`;
    } else if (box3 && box3 === box6 && box3 === box9) { //col3
        winner = box3;
        statusBox.innerHTML = `${winner} wins!`;
    } else if (box1 && box1 === box5 && box1 === box9) { //diag1
        winner = box1;
        statusBox.innerHTML = `${winner} wins!`;
    } else if (box3 && box3 === box5 && box3 === box7) { //diag2
        winner = box3;
        statusBox.innerHTML = `${winner} wins!`;
    } else if (box1 && box2 && box3 && box4 && box5 && box6 && box7 && box8 && box9) {
        statusBox.innerHTML = "DRAW!";
        winner = "draw";
    }

    // let game = [[box1, box2, box3],
    // [box4, box5, box6],
    // [box7, box8, box9]];

    // function getRow(game, row) {
    //     return game[row];
    // };

    // function getColumn(game, column) {
    //     let col = []
    //     for (let i = 0; i < game.length; i++) {
    //         col.push(game[i][column]);
    //     }
    //     return col;
    // }

    // let diagonal1 = [box1, box5, box9];
    // let diagonal2 = [box3, box5, box7];

    // function threeOfAKind(array) {
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] === undefined) {
    //             return
    //         } else {
    //             if (array[0] !== array[1]) {
    //                 return false;
    //             } else if (array[0] !== array[2]) {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }
    // }

    // function checkGameStatus(game) {
    //     for (let i = 0; i < 3; i++) {
    //         if (!threeOfAKind(getRow(game, i))) {
    //             console.log("false")
    //             return false;
    //         } else if (!threeOfAKind(getColumn(game, i))) {
    //             console.log("false")
    //             return false
    //         } else {
    //             console.log("true")
    //             return true
    //         }
    //     }
    //     if (threeOfAKind(diagonal1) === false) {
    //         console.log("false")
    //         return false
    //     } 
    //     if (threeOfAKind(diagonal2) === false) {
    //         console.log("false")
    //         return false
    //     }
    //     console.log("true")
    //     return true;
    // }
}



//clicking events - check if box is filled, if it is nothing happens, if it isn't place the appropriate mark, switch player after a mark is placed, change notification of player turn, check game status to see if winner/draw,
const boxClick = (event) => {
    if (winner === null) { //stops clicks if game is over
        if (event.target.classList[2] === "x" || event.target.classList[2] === "o") {
            return;
        }
        if (currentPlayer === player1) {
            event.target.classList.add("x");
            statusBox.innerHTML = "Player 2 (O) turn"
            changePlayer()
            checkGameStatus()
        } else {
            event.target.classList.add("o");
            statusBox.innerHTML = "Player 1 (X) turn"
            changePlayer()
            checkGameStatus()
        }
    }
}

    for (const gameBox of gameBoxes) {
        gameBox.addEventListener('click', boxClick)
    }

//restart game

const restartGameFunc = () => {
    winner = null;
    statusBox.innerHTML = "Player 1 (O) turn";
    for (const gameBox of gameBoxes){
        gameBox.classList.remove("x");
        gameBox.classList.remove("o")
    }
}

gameRestart.addEventListener("click", restartGameFunc);
