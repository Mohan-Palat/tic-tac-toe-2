console.log('main js up!')

const winningMoves = []

const playerOption = ['X', 'O']

function init() {
    console.log('Welcome to Tic Tac Toe!')

    // Attaching event listener to button
    document.querySelector('#restart')
    .addEventListener('click', resetPlayBoard)

    // Trigger the click event for reset play board
    document.querySelector('#restart').click();
}

// Call the initialization function
init()

// function to reset game board
function resetPlayBoard(event) {
    event.preventDefault();
    console.log('Game board reset!')

    // get all boxes and set to ''
    let allBoxes = document.querySelectorAll('.box')
    allBoxes.forEach(box => {
        console.log(`box value: ${box.innerHTML}`)
        box.innerHTML = ''
    })
}

let resetButton = document.querySelector('#restart')

// add Event Listener button
resetButton.addEventListener('click', resetPlayBoard)