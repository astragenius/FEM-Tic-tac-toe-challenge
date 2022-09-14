import './scss/index.scss'
import './assets/img/icon-restart.svg'
import logoImg from './assets/img/logo.svg'
import xSymbol from './assets/img/toggle-x.svg'
import OSymbol from './assets/img/toggle-o.svg'
import { Modal } from './js/Modal'
import { CreatePlayer } from './js/CreatePlayer'
import { StartToggle } from './js/StartToggle'
import { GameBoard } from './js/GameBoard'

const headerTurn = document.querySelector('.player-turn-symbol')
const gameBoardLogo = document.querySelector('.game-board-logo')
const btnReload = document.querySelector('.btn-reload')
const modal = document.querySelector('.modal-container')

let dataRestart = {
    playerText: '',
    headText: 'restart game?',
    playerSymbol: 'neutral',
    btnText1: 'no, cancel',
    btnText2: 'yes, restart',
}
let dataTied = {
    playerText: '',
    headText: 'Round tied',
    playerSymbol: 'neutral',
    btnText1: 'quit',
    btnText2: 'next round',
}
let dataPlayerXWin = {
    playerText: 'you won!',
    playerSymbol: 'X',
    headText: 'takes the round',
    btnText1: 'quit',
    btnText2: 'next round',
}
let dataPlayerXlose = {
    playerText: 'oh no you lose..',
    headText: 'takes the round',
    playerSymbol: 'X',
    btnText1: 'quit',
    btnText2: 'next round',
}
let dataPlayerOWin = {
    playerText: 'Player 2 winns',
    headText: 'takes the round',
    playerSymbol: 'O',
    btnText1: 'quit',
    btnText2: 'next round',
}

//logo.src = logoImg
headerTurn.src = xSymbol
gameBoardLogo.src = logoImg

let p1 = new CreatePlayer('X', 'Player1')
let p2 = new CreatePlayer('O', 'Player2')
const gameboard = new GameBoard(p1, p2)

//StartToggle.render('.center-container')
//StartToggle.addListener()
function gameStart() {
    const gameField = document.querySelector('.game-field')
    const tiles = [...document.querySelectorAll('.game-tile')]
    const turnImg = document.querySelector('.player-turn-symbol')
    gameboard.init()

    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
            if (gameField.getAttribute('data-turn') === 'X') {
                turnImg.setAttribute('data-turn', 'X')
                tile.classList.add('x-marker')
                gameField.setAttribute('data-turn', 'O')
                turnImg.src = OSymbol
                gameboard.checkWinner('x-marker')
                gameboard.checkIsDraw()
            } else {
                turnImg.setAttribute('data-turn', 'O')
                tile.classList.add('o-marker')
                gameField.setAttribute('data-turn', 'X')
                turnImg.src = xSymbol
                gameboard.checkWinner('o-marker')
                gameboard.checkIsDraw()
            }
        })
    })
}

gameStart()
