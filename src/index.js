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

export function update() {
    document.querySelector('.modal-container').innerHTML = newModal.render()
}

const newModal = new Modal(dataRestart)

/* btnReload.addEventListener('click', () => {
    if (modal.getAttribute('data-modal-active') === 'false') {
        modal.setAttribute('data-modal-active', true)
        modal.innerHTML = newModal.render()
        newModal.addListener()
    }
}) */

//logo.src = logoImg
headerTurn.src = xSymbol
gameBoardLogo.src = logoImg

/* const gameField = document.querySelector('.game-field')
const turnImg = document.querySelector('.player-turn-symbol')
const tiles = [...document.querySelectorAll('.game-tile')]
tiles.forEach((tile) => {
    tile.addEventListener('click', function () {
        if (gameField.getAttribute('data-turn') === 'X') {
            turnImg.setAttribute('data-turn', 'x')
            this.classList.add('x-marker')
            gameField.setAttribute('data-turn', 'O')
            headerTurn.src = OSymbol
        } else {
            turnImg.setAttribute('data-turn', 'o')
            this.classList.add('o-marker')
            gameField.setAttribute('data-turn', 'X')
            headerTurn.src = xSymbol
        }
    })
}) */

let p1 = new CreatePlayer('X', 'Player1')
let p2 = new CreatePlayer('O', 'Player2')
const gameboard = new GameBoard(p1, p2)
gameboard.init()
//StartToggle.render('.center-container')
//StartToggle.addListener()
