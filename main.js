console.log('main js up!')

// winning matrix
const winningMoves = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]
]

const playerOption = ['X', 'O']
let player1 = ''
let player2 = ''

// player moves should be 5 or less per game
let player1Moves = []
let player2Moves = []

// this is assigned X or O dependending on 
// whether current player is using X or O
let currentPlayer = ''

// should not be more that 9
let boardMoves = []

// get all boxes
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
        // set all boxes to emoji 
        box.innerHTML = '&#129313;'
        box.disabled = false
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
            //   console.log(`elm: ${box.value}`)

            // set the button to currentPlayer - 'X' or 'O'
            event.target.innerHTML = currentPlayer
            // console.log(event.target.value)
            // disable box after it is selected
            event.target.disabled = true

            // add box number to array
            // boardMoves.push(index + 1)
            boardMoves[index] = currentPlayer

            if (currentPlayer === player1) {
                player1Moves.push(index)
                player1Moves.sort()
            } else {
                player2Moves.push(index)
                player2Moves.sort()
            }

            // call validate method
            validateMoves(currentPlayer)

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

function validateMoves(validatePlayer) {
    let winner = false
    for (moves in winningMoves) {
        console.log(winningMoves[moves])
        const move = winningMoves[moves]
        // console.log('first ' + boardMoves[move[0]])
        // console.log('second ' + boardMoves[move[1]])
        // console.log('third ' + boardMoves[move[2]])

        // compare board move values board move to
        // the winning scenarios predefined in winningMoves
        // if any row  of 3 in boardMoves has the same X or O
        // it is the winner
        let first = boardMoves[move[0]]
        let second = boardMoves[move[1]]
        let third = boardMoves[move[2]]

        // check none of the value is not undefined
        if(first !== undefined || second !== undefined ||third !== undefined) {
            if(first === second && first === third) {
                winner = true;
                alert(`${validatePlayer} is the winner!`)
            }
        } else {
            continue
        }

    }

    // TODOs
    // if winner found disable all buttons
    // highlight winner 
    // highlight current players turn
    // who's turn it is next
    // determine draw scenario
    
}