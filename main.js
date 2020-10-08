console.log('main js up!')

// winning matrix
const winningMoves = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]
]

// maximum number of plays per game/round
const MAX_PLAY_MOVES = 9

const playerOption = ['X', 'O']
let player1 = ''
let player2 = ''
let playerText = 'Player 1'

let gameOver = false
let drawGame = false

// player moves should be 5 or less per game
let player1Moves = []
let player2Moves = []

// this is assigned X or O dependending on 
// whether current player is using X or O
let currentPlayer = ''

// should not be more that 9
let boardMoves = []

// keep track of the number of plays or validation
let validateCount = 0

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

    // call to refresh player style on page
    refreshPlayer()

    validateCount = 0
    playerText = 'Player 1'

    gameOver = false
    drawGame = false
    // setGameMessage('')
    setGameMessage(`${playerText}'s turn!`)
    document.querySelector('#winner').style.display = 'none'

    boardMoves = []
    randomSelectPlayer()
}


// reset style on player buttons 
function refreshPlayer() {
    player1Display.style.backgroundColor = 'rgb(14, 233, 149)'
    player1Display.disabled = false
    
    player2Display.disabled = false
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
    highlightActivePlayer()

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

            // call validate moves after each play
            validateMoves(playerText)

            // switch player to next
            switchPlayer()
          }
        })
      } else {
        console.log('click on a box! \n watch your cursor player!')
      }
    })
}

selectBox()

// switch current player between player1 to player2 and vice versa
function switchPlayer() {
    // console.log('In switchPlayer')
    if (currentPlayer === player1) {
        currentPlayer = player2
        playerText = 'Player 2'
    } else {
        currentPlayer = player1
        playerText = 'Player 1'
    }

    highlightActivePlayer()
}

// highlight current active player
function highlightActivePlayer() {
    if(currentPlayer === player1) {
        document.querySelector('#player-one').classList.add('active')
        document.querySelector('#player-two').classList.remove('active')
        
    } else {
        document.querySelector('#player-two').classList.add('active')
        document.querySelector('#player-one').classList.remove('active')
    }

    // check if game is over before displaying message
    gameOver || drawGame ? '' : setGameMessage(`${playerText}'s turn!`)
}

// method to validate every move
// compares winning scenario array with current moves 
// by both players. If there is a winner return otherwise
// keep playing 
function validateMoves(validatePlayer) {
    validateCount++

    // keep track if there is a winner or not
    let winner = false

    // loop through winning moves array
    for (moves in winningMoves) {
        // console.log(winningMoves[moves])
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
                gameOver = true

                // call to disable all boxes if there is a winner 
                disableBoxes()

                // set win message 
                setGameMessage(`${validatePlayer} is the winner! &#127881; &#127882;`)
                
                // remove active style class from player buttons 
                removeActiveClass()

                return
            }
        } else {
            // there is no winner continue playing 
            winner = false
            continue
        }
        console.log(`validate count: ${validateCount}`)
    }

    // if no winner and play count is equal to max
    // the game is a draw
    if(!winner && validateCount === MAX_PLAY_MOVES) {
        console.log('It is a draw')
        drawGame = true

        // send draw message 
        setGameMessage('It is the DRAW!')

        // remove active style class from player buttons 
        removeActiveClass()
    }  
}

// disable all boxes on board
function disableBoxes() {
    allBoxes.forEach(box => {
        box.disabled = true
    })
}

// show/attach message win, lose, draw to element
// hide and show relevant div
function setGameMessage(message) {
    let nextPlay = document.querySelector('#nextPlayer')
    let winner = document.querySelector('#winner')
    if (gameOver || drawGame) {
        winner.style.display = 'block'
        winner.innerHTML = message
        nextPlay.style.display = 'none'
    } 
    else {
        nextPlay.innerHTML = message
        nextPlay.style.display = 'block'
    }
}

// remove active class from both players
function removeActiveClass() {
    console.log('In removeActiveClass')
    document.querySelectorAll('.player').forEach(player => {
        player.disabled = true
        player.style.backgroundColor = 'transparent'
    })
}