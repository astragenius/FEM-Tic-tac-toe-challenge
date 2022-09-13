import xSymbol from '../assets/img/toggle-x.svg'
import OSymbol from '../assets/img/toggle-o.svg'
import { Modal } from './Modal'

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
    playerText: 'Player 2 wins',
    headText: 'takes the round',
    playerSymbol: 'O',
    btnText1: 'quit',
    btnText2: 'next round',
}

export class GameBoard {
    constructor(p1, p2) {
        this.p1 = {
            symbol: p1.symbol,
            points: p1.points,
            player: p1.player,
        }

        this.p2 = {
            symbol: p2.symbol,
            points: p2.points,
            player: p2.player,
        }

        this.draw = 0
        this.p1Score = document.querySelector('#playerScore')
        this.tieScore = document.querySelector('#tieScore')
        this.p2Score = document.querySelector('#player2Score')
        this.tiles = [...document.querySelectorAll('.game-tile')]
    }

    init() {
        this.initReloadBtn()
    }

    showModal(state) {
        this.modalContainer = document.querySelector('.modal-container')
        this.modal = new Modal(state)
        if (this.modalContainer.getAttribute('data-modal-active') === 'false') {
            this.modalContainer.setAttribute('data-modal-active', true)
            this.modalContainer.innerHTML = this.modal.render()
            this.modal.addListener(this.modalState, this.resetGameBoard)
        }
    }

    modalState() {
        console.log('ModalState')
    }

    resetGameBoard() {
        const tiles = [...document.querySelectorAll('.game-tile')]
        const turnImg = document.querySelector('.player-turn-symbol')
        const gameField = document.querySelector('.game-field')
        tiles.forEach((tile) => {
            tile.classList.remove('x-marker')
            tile.classList.remove('o-marker')
        })
        gameField.setAttribute('data-turn', 'X')
        turnImg.src = xSymbol
    }

    checkWinner(currendClass) {
        const tiles = [...document.querySelectorAll('.game-tile')]
        const WINING_COMBINATION = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        const winner = WINING_COMBINATION.some((combination) => {
            return combination.every((index) => {
                return tiles[index].classList.contains(currendClass)
            })
        })

        if (winner === true && currendClass === 'x-marker') {
            this.showModal(dataPlayerXWin)
        }
        if (winner === true && currendClass === 'o-marker') {
            this.showModal(dataPlayerOWin)
        }
    }

    initReloadBtn() {
        const btnReload = document.querySelector('.btn-reload')

        btnReload.addEventListener('click', () => {
            this.showModal(dataRestart)
        })
    }

    addPointsP1() {
        this.p1.points++
    }

    addPointsP2() {
        this.p2.points++
    }

    setDraw() {
        this.draw++
    }

    renderPoints() {
        this.p1Score.textContent = this.p1.points
        this.p2Score.textContent = this.p2.points
        this.tieScore.textContent = this.draw
    }
}
