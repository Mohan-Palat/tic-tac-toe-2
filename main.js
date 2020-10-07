console.log('main js up!')

const winningMoves = []

const playerOption = ['X', 'O']
let player1 = ''
let player2 = ''

// get all boxes and set to ''
let allBoxes = document.querySelectorAll('.box')

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

// function to reset game board
function resetPlayBoard(event) {
    event.preventDefault();
    console.log('Game board reset!')

    allBoxes.forEach(box => {
        console.log(`box value: ${box.innerHTML}`)
        box.innerHTML = ''
    })
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
}

// Based on the max length of the Array. Return a random items index
// within the Array's length.
function getRandomIndex(maxLength) {
    return Math.floor(Math.random() * Math.floor(maxLength));
}