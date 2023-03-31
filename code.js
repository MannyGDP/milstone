// Define the game logic
let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer =X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
  console.log(e.target)
}

startGame()
//#
function checkWin() {
  // Check all possible winning combinations
}

function handleMove(square) {
  // Update gameBoard and check if the game has been won
}

// Handle user input
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('click', () => {
    handleMove(square);
  });
});

// Display the game state
function displayGameState() {
  // Display the game board and the current player's turn
}

// Handle game end
function endGame(winner) {
  // Display the winner and reset the game board
}

// Test and debug
// Test the game thoroughly and fix any bugs that arise