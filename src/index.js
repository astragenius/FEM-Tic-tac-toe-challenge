import './scss/index.scss'
import './assets/img/icon-restart.svg'
import logoImg from './assets/img/logo.svg'
import xSymbol from './assets/img/toggle-x.svg'
import OSymbol from './assets/img/toggle-o.svg'
import { Modal } from './js/Modal'
import { CPU, Player } from './js/CreatePlayer'
import { StartToggle } from './js/StartToggle'
import { GameBoard } from './js/GameBoard'

const headerTurn = document.querySelector('.player-turn-symbol')
const gameBoardLogo = document.querySelector('.game-board-logo')
const logo = document.querySelector('.game-menu-logo')

let gameboard

logo.src = logoImg

let dataRestart = {
    playerText: '',
    headText: 'restart game?',
    playerSymbol: 'neutral',
    btnText1: 'no, cancel',
    btnText2: 'yes, restart',
    closeFunc: function () {
        const modalContainer = document.querySelector('.modal-container')
        modalContainer.setAttribute('data-modal-active', false)
    },
    btnSec1Function: () => {
        const board = document.querySelector('.game-board')
        const toggle = document.querySelector('.game-menu')
        GameBoard.resetGameBoard()
        gameboard.resetGame()
        gameboard = null
        board.setAttribute('data-game-board', false)
        toggle.setAttribute('data-toggle', true)
    },
}
let dataTied = {
    playerText: '',
    headText: 'Round tied',
    playerSymbol: 'neutral',
    btnText1: 'quit',
    btnText2: 'next round',
    closeFunc: function () {
        const modalContainer = document.querySelector('.modal-container')
        modalContainer.setAttribute('data-modal-active', false)
    },
    btnSec1Function: function () {
        GameBoard.resetGameBoard()
    },
}
let dataPlayerXWin = {
    playerText: 'you won!',
    playerSymbol: 'X',
    headText: 'takes the round',
    btnText1: 'quit',
    btnText2: 'next round',
    closeFunc: function () {
        const modalContainer = document.querySelector('.modal-container')
        GameBoard.resetGameBoard()
        modalContainer.setAttribute('data-modal-active', false)
        const toggle = document.querySelector('.game-menu')
        const board = document.querySelector('.game-board')
        toggle.setAttribute('data-toggle', true)
        board.setAttribute('data-game-board', false)
    },
    btnSec1Function: function () {
        GameBoard.resetGameBoard()
    },
}
let dataPlayerXlose = {
    playerText: 'oh no you lose..',
    headText: 'takes the round',
    playerSymbol: 'X',
    btnText1: 'quit',
    btnText2: 'next round',
    closeFunc: function () {
        const modalContainer = document.querySelector('.modal-container')
        modalContainer.setAttribute('data-modal-active', false)
    },
    btnSec1Function: function () {
        GameBoard.resetGameBoard()
        gameStart()
    },
}
let dataPlayerOWin = {
    playerText: 'Player 2 wins',
    headText: 'takes the round',
    playerSymbol: 'O',
    btnText1: 'quit',
    btnText2: 'next round',
    closeFunc: function () {
        const modalContainer = document.querySelector('.modal-container')
        modalContainer.setAttribute('data-modal-active', false)
    },
    btnSec1Function: function () {
        GameBoard.resetGameBoard()
    },
}

const modal = new Modal(dataRestart)

const createPvC = () => {
    const input = document.querySelector('.checkbox').checked
    if (input === true) {
        gameboard = new GameBoard(new Player('YOU', 'X'), new CPU('CPU', 'O'))
    } else if (input === false) {
        gameboard = new GameBoard(new Player('YOU', 'O'), new CPU('CPU', 'X'))
    }
}
const createPvP = () => {
    const input = document.querySelector('.checkbox').checked
    if (input === true) {
        gameboard = new GameBoard(
            new Player('Player1', 'X'),
            new Player('Player2', 'O')
        )
    } else if (input === false) {
        gameboard = new GameBoard(
            new Player('Player1', 'O'),
            new Player('Player2', 'X')
        )
    }
}

//logo.src = logoImg
headerTurn.src = xSymbol
gameBoardLogo.src = logoImg

const pvc = document.getElementById('btn-pvp')

const pvCpu = document.getElementById('btn-pvsCpu')

function showModal(state) {
    const modalContainer = document.querySelector('.modal-container')
    if (!modalContainer.contains(document.querySelector('.modal'))) {
        modal.newState(state)
        modalContainer.appendChild(modal.render())
    }
    if (modalContainer.contains(document.querySelector('.modal'))) {
        modal.newState(state)
        modalContainer.appendChild(modal.render())
    }
    if (modalContainer.getAttribute('data-modal-active') === 'false') {
        modalContainer.setAttribute('data-modal-active', true)
    }
}
function renderDraw() {
    if (
        gameboard.checkIsDraw() === true &&
        gameboard.checkWinner('o-marker') === false &&
        gameboard.checkWinner('x-marker') === false
    ) {
        showModal(dataTied)
        gameboard.setDraw()
        gameboard.renderPoints()
    } else {
        return
    }
}
function renderWinner() {
    if (gameboard.checkWinner('x-marker') === true) {
        modal.newState(dataPlayerXWin)
        showModal(dataPlayerXWin)
        gameboard.addPointsP1()
        gameboard.renderPoints()
    } else if (gameboard.checkWinner('o-marker') === true) {
        modal.newState(dataPlayerOWin)
        showModal(dataPlayerOWin)
        gameboard.addPointsP2()
        gameboard.renderPoints()
    }
}
function reloadBtn() {
    document
        .querySelector('.btn-reload')
        .addEventListener('click', () => showModal(dataRestart))
}

function gameLogic() {
    const gameField = document.querySelector('.game-field')
    const turnImg = document.querySelector('.player-turn-symbol')

    if (gameField.getAttribute('data-turn') === 'X') {
        turnImg.setAttribute('data-turn', 'X')

        this.classList.add('x-marker')
        gameField.setAttribute('data-turn', 'O')
        turnImg.src = OSymbol

        renderWinner()
        renderDraw()
    } else {
        turnImg.setAttribute('data-turn', 'O')
        this.classList.add('o-marker')
        gameField.setAttribute('data-turn', 'X')
        turnImg.src = xSymbol
        gameboard.checkWinner('o-marker')

        renderWinner()
        gameboard.p2.cpuMove()
        renderDraw()
    }
}

function gameStart() {
    const tiles = [...document.querySelectorAll('.game-tile')]
    gameboard.p2.cpuMove()
    reloadBtn()

    tiles.forEach((tile) => {
        tile.addEventListener('click', gameLogic)
    })
}

function gameInit() {
    pvCpu.addEventListener('click', () => {
        const toggle = document.querySelector('.game-menu')
        const board = document.querySelector('.game-board')
        createPvC()
        toggle.setAttribute('data-toggle', false)
        board.setAttribute('data-game-board', true)
        gameStart()
        gameboard.setPlayerName()
    })
    pvc.addEventListener('click', () => {
        const toggle = document.querySelector('.game-menu')
        const board = document.querySelector('.game-board')
        createPvP()
        toggle.setAttribute('data-toggle', false)
        board.setAttribute('data-game-board', true)
        gameStart()
        gameboard.setPlayerName()
    })
}

gameInit()
