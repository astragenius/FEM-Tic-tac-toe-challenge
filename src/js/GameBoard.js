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
    }

    init() {
        const p1Score = document.querySelector('#playerScore')
        const tieScore = document.querySelector('#tieScore')
        const p2Score = document.querySelector('#player2Score')
        this.setEventListener()
        this.initReloadBtn()
    }

    setEventListener() {
        const gameField = document.querySelector('.game-field')
        const tiles = [...document.querySelectorAll('.game-tile')]
        const turnImg = document.querySelector('.player-turn-symbol')
        tiles.forEach((tile) => {
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
        const modal = document.querySelector('.modal-container')
        const btnReload = document.querySelector('.btn-reload')
        const newModal = new Modal(dataRestart)
        btnReload.addEventListener('click', function () {
            if (modal.getAttribute('data-modal-active') === 'false') {
                modal.setAttribute('data-modal-active', true)
                modal.innerHTML = newModal.render()
                newModal.addListener()
            }
        })
    }

    setPoints(prop) {
        prop.points++
    }
    getPoints(prop) {
        return prop.points
    }
    getSymbol(prop) {
        return prop.symbol
    }
    setDraw() {
        this.draw++
    }
    getDraw() {
        return this.draw
    }

    renderPoints() {}
}
