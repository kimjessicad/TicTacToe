// enter names and have them displayed
// have order chosen for us by the game
// --- take turns placing marks in empty spaces
// --- not be able to place a mark in an occupied spaces
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser

// one player game see the name 'Computer' displayed as my opponent
// have the Computer make moves as if it were a human player

// EXTRA 
// have the computer make a "better than gussing" move
// customize board size




// When name is typed into box, appear next to Player 1
// If no name is typed into Player 2, default name next to Player 2 to Computer
//Player 1 is X, Player 2 is O
// Starting player is randomized
// text appears to show whose turn it is
// Make X or O appear if empty div box is clicked
//Win condition
//if 3 in a row, column, or diagonal is the same, declare winner
//if all spaces filled and row/column/diagonal does not have 3 of a kind then declare draw
//Reset button to clear the board

const gameTurn = document.querySelector('.whosTurn');
const gameRestart = document.querySelector('.restart');
const gameBoxes = document.querySelectorAll('.box')


const player1 = "X"
const player2 = "O"




//alternating players

let currentPlayer = player1

function changePlayer() {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
    return currentPlayer
}

// // win conditions - convert the boxes into an array that can be checked for winning conditions
// let box1 = gameBoxes[0].classList[2]; // return undefined, "o", or "x" ------------------ ERROR HERE. everything is coming back as undefined
// let box2 = gameBoxes[1].classList[2];
// let box3 = gameBoxes[2].classList[2];
// let box4 = gameBoxes[3].classList[2];
// let box5 = gameBoxes[4].classList[2];
// let box6 = gameBoxes[5].classList[2];
// let box7 = gameBoxes[6].classList[2];
// let box8 = gameBoxes[7].classList[2];
// let box9 = gameBoxes[8].classList[2];

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

    let row1 = [box1, box2, box3];
    let row2 = [box4, box5, box6];
    let row3 = [box7, box8, box9];
    let col1 = [box1, box4, box7];
    let col2 = [box2, box5, box9];
    let col3 = [box3, box6, box9];
    let diag1 = [box1, box5, box9];
    let diag2 = [box3, box5, box7];
console.log (row1)


}



//clicking events - check if box is filled, if it is nothing happens, if it isn't place the appropriate mark, switch player after a mark is placed, change notification of player turn, check game status to see if winner/draw,
const boxClick = (event) => {
    if (event.target.classList[2] === "x" || event.target.classList[2] === "o") {
        return;
    }
    if (currentPlayer === player1) {
        event.target.classList.add("x");
        changePlayer()
        checkGameStatus()
    } else {
        event.target.classList.add("o");
        changePlayer()
        checkGameStatus()
    }
}

for (const gameBox of gameBoxes) {
    gameBox.addEventListener('click', boxClick)
}



