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
        this.setEventListener()
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

    setEventListener() {
        const gameField = document.querySelector('.game-field')

        const turnImg = document.querySelector('.player-turn-symbol')
        this.tiles.forEach((tile) => {
            tile.addEventListener('click', function () {
                if (gameField.getAttribute('data-turn') === 'X') {
                    turnImg.setAttribute('data-turn', 'X')
                    this.classList.add('x-marker')
                    gameField.setAttribute('data-turn', 'O')
                    turnImg.src = OSymbol
                } else {
                    turnImg.setAttribute('data-turn', 'O')
                    this.classList.add('o-marker')
                    gameField.setAttribute('data-turn', 'X')
                    turnImg.src = xSymbol
                }
            })
        })
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
