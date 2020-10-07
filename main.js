console.log('main js up!')

const winningMoves = []

const playerOption = ['X', 'O']
let player1 = ''
let player2 = ''
let player1Moves = []
let player2Moves = []
let currentPlayer = ''

let boardMoves = []

// get all boxes and set to ''
let allBoxes = document.querySelectorAll('.box')

const player1Display = document.querySelector('#player-one')
const player2Display = document.querySelector('#player-two')

function init() {
    console.log('Welcome to Tic Tac Toe!')

    // Attaching event listener to button
    document.querySelector('#restart')
    .addEventListener('click', resetPlayBoard)

    // Trigger the click event for reset play board
    document.querySelector('#restart').click()

    // call to determine X or O for players
    randomSelectPlayer()
}

// Call the initialization function
init()

// function to reset game board and set all boxes to empty
function resetPlayBoard(event) {
    event.preventDefault();
    console.log('Game board reset!')

    allBoxes.forEach(box => {
        // set all boxes to E - empty 
        box.innerHTML = 'E'
    })
    // boardMoves = []
    randomSelectPlayer()
}

let resetButton = document.querySelector('#restart')

// add Event Listener button
resetButton.addEventListener('click', resetPlayBoard)

// determine X or O for player1 and player2
function randomSelectPlayer() {
    let idx = getRandomIndex(playerOption.length)

    if (idx === 0) {
        player1 = playerOption[0] 
        player2 = playerOption[1]
    } else {
        player1 = playerOption[1]
        player2 = playerOption[0]
    }
    
    console.log(`player1: ${player1}  <==> player2: ${player2} `)
    
    // player1 is current player when game starts/restarted
    currentPlayer = player1

    // assign X and O to player1 and player2
    player1Display.innerHTML = `Player 1: ${player1}`
    player2Display.innerHTML = `Player 2: ${player2}`
}

// Based on the max length of the Array. Return a random items index
// within the Array's length.
function getRandomIndex(maxLength) {
    return Math.floor(Math.random() * Math.floor(maxLength));
}

// selectBox: determine box selected
function selectBox() {

    const mainContainer = document.querySelector('.container')
    const allBoxes = document.querySelectorAll('.box')

    mainContainer.addEventListener('click', (event) => {

      if (event.target.classList.contains('box')) {
        allBoxes.forEach((box, index) => {
          if (box === event.target) {
              console.log(`elm: ${box.value}`)

            // set the button to currentPlayer - 'X' or 'O'
            event.target.innerHTML = currentPlayer
            boardMoves.push(index + 1)
            // switch player to next
            switchPlayer()
          }
        })
      } else {
        console.log('click on a box!')
      }
    })
}

selectBox()

// switch current player between player1 to player2 and vice versa
function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1
}
