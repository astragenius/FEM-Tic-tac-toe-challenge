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
    //playerText: '',
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
        gameStart()
    },
}
let dataWin = {
    playerText: '',
    headText: '',
    btnText1: 'quit',
    btnText2: 'next round',
    closeFunc: function () {
        const modalContainer = document.querySelector('.modal-container')
        //GameBoard.resetGameBoard()
        modalContainer.setAttribute('data-modal-active', false)
        const toggle = document.querySelector('.game-menu')
        const board = document.querySelector('.game-board')
        toggle.setAttribute('data-toggle', true)
        board.setAttribute('data-game-board', false)
    },
    btnSec1Function: function () {
        GameBoard.resetGameBoard()
        gameStart()
    },
}
let dataPlayerXWin = {
    playerText: 'you won!',
    headText: 'takes the round',
    btnText1: 'quit',
    btnText2: 'next round',
    closeFunc: function () {
        const modalContainer = document.querySelector('.modal-container')
        //GameBoard.resetGameBoard()
        modalContainer.setAttribute('data-modal-active', false)
        const toggle = document.querySelector('.game-menu')
        const board = document.querySelector('.game-board')
        toggle.setAttribute('data-toggle', true)
        board.setAttribute('data-game-board', false)
    },
    btnSec1Function: function () {
        GameBoard.resetGameBoard()
        gameStart()
    },
}
let dataPlayerXlose = {
    playerText: 'oh no you lose..',
    headText: 'takes the round',
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
let dataPlayerOlose = {
    playerText: 'Player 1 wins',
    headText: 'takes the round',

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

function showModal(state, player) {
    const modalContainer = document.querySelector('.modal-container')
    if (!modalContainer.contains(document.querySelector('.modal'))) {
        modal.newState(state, player)
        modalContainer.appendChild(modal.render())
    }
    if (modalContainer.contains(document.querySelector('.modal'))) {
        modal.newState(state, player)
        modalContainer.appendChild(modal.render())
    }
    if (modalContainer.getAttribute('data-modal-active') === 'false') {
        modalContainer.setAttribute('data-modal-active', true)
    }
}
function renderDraw() {
    if (
        gameboard.checkIsDraw() === true &&
        gameboard.checkWinner('O-marker') === false &&
        gameboard.checkWinner('X-marker') === false
    ) {
        showModal(dataTied)
        gameboard.setDraw()
        gameboard.renderPoints()
    } else {
        return
    }
}
export function renderWinner(player) {
    if (gameboard.checkWinner('X-marker') === true) {
        console.log('X-winns', player)
        modal.newState(dataWin, player)
        showModal(dataWin, player)
        gameboard.addPointsP1()
        gameboard.renderPoints()
        //PlayerTurn reset after win
        if (gameboard.p1.getSymbol() === 'X') {
            gameboard.p1.playerTurn = true
            gameboard.p2.playerTurn = false
        } else {
            gameboard.p1.playerTurn = false
            gameboard.p2.playerTurn = true
        }
    } else if (gameboard.checkWinner('O-marker') === true) {
        console.log('O-winns', player)
        modal.newState(dataWin, player)
        showModal(dataWin, player)
        gameboard.addPointsP2()
        gameboard.renderPoints()

        //playerTurn reset after win

        if (gameboard.p1.getSymbol() === 'X') {
            gameboard.p1.playerTurn = true
            gameboard.p2.playerTurn = false
        } else {
            gameboard.p1.playerTurn = false
            gameboard.p2.playerTurn = true
        }
    }
}
function reloadBtn() {
    document
        .querySelector('.btn-reload')
        .addEventListener('click', () => showModal(dataRestart))
}
function gameLogicPVC() {
    const gameField = document.querySelector('.game-field')
    const turnImg = document.querySelector('.player-turn-symbol')

    this.classList.add(`${gameboard.p1.symbol}-marker`)

    if (
        gameboard.p1.playerTurn === true &&
        gameboard.checkWinner(`${gameboard.p1.symbol}-marker`)
    ) {
        turnImg.setAttribute('data-turn', gameboard.p2.symbol)
        gameField.setAttribute('data-turn', gameboard.p1.symbol)
        renderWinner(gameboard.p1)
        gameboard.p1.playerTurn = false
        gameboard.p2.playerTurn = true
        if (!gameboard.checkWinner(`${gameboard.p1.symbol}-marker`)) {
            gameboard.p2.cpuMove()
        }
    } else {
        gameboard.p2.cpuMove()

        gameboard.p1.playerTurn = true
        gameboard.p2.playerTurn = false
        renderWinner(gameboard.p2)
    }
    renderDraw()
}

function gameLogicPVP() {
    const gameField = document.querySelector('.game-field')
    const turnImg = document.querySelector('.player-turn-symbol')

    if (gameboard.p2.playerTurn === false) {
        turnImg.setAttribute('data-turn', gameboard.p1.symbol)

        this.classList.add(`${gameboard.p1.symbol}-marker`)
        gameField.setAttribute('data-turn', gameboard.p2.symbol)

        turnImg.src = gameboard.p1.symbol === 'X' ? OSymbol : xSymbol
        console.log(turnImg.src)
        gameboard.p2.playerTurn = true
        gameboard.p1.playerTurn = false
        renderWinner(gameboard.p1)
    } else {
        turnImg.setAttribute('data-turn', gameboard.p2.symbol)
        this.classList.add(`${gameboard.p2.symbol}-marker`)
        gameField.setAttribute('data-turn', gameboard.p1.symbol)
        turnImg.src = gameboard.p2.symbol === 'X' ? OSymbol : xSymbol
        console.log(turnImg.src)
        gameboard.p1.playerTurn = true
        gameboard.p2.playerTurn = false
        renderWinner(gameboard.p2)
    }

    renderDraw()
}

function gameStart() {
    const tiles = [...document.querySelectorAll('.game-tile')]

    reloadBtn()

    if (gameboard.p2.getPlayer() === 'CPU') {
        if (gameboard.p2.playerTurn === true) {
            gameboard.p1.playerTurn = true
            gameboard.p2.playerTurn = false
            gameboard.p2.cpuMove()
        }

        tiles.forEach((tile) => {
            tile.removeEventListener('click', gameLogicPVP, true)
            tile.addEventListener('click', gameLogicPVC, true)
        })
    } else {
        tiles.forEach((tile) => {
            tile.removeEventListener('click', gameLogicPVC, true)
            tile.addEventListener('click', gameLogicPVP, true)
        })
    }
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
