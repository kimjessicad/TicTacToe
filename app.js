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


const player1 = "X"
const player2 = "O"
let currentPlayer = player1

function changePlayer(){
    if (currentPlayer === player1){
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
    return currentPlayer
}


const gameBoxes = document.querySelectorAll('.box')
const boxClick = (event) =>{
    if (event.target.classList[2] === "x" || event.target.classList[2] === "o"){
        return;
    }
    if (currentPlayer === player1){
        event.target.classList.add("x");
        changePlayer()
    } else {
        event.target.classList.add("o");
        changePlayer()  
    }

}


for (const gameBox of gameBoxes){
    gameBox.addEventListener('click', boxClick)
}



