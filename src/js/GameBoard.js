import xSymbol from '../assets/img/toggle-x.svg'
import OSymbol from '../assets/img/toggle-o.svg'

export class GameBoard {
    constructor(p1, p2) {
        this.draw = 0
        this.p1 = p1
        this.p2 = p2
    }

    static resetGameBoard() {
        const tiles = [...document.querySelectorAll('.game-tile')]
        const turnImg = document.querySelector('.player-turn-symbol')
        const gameField = document.querySelector('.game-field')
        this.modalContainer = document.querySelector('.modal-container')

        tiles.forEach((tile) => {
            tile.classList.remove('X-marker')
            tile.classList.remove('O-marker')
        })
        gameField.setAttribute('data-turn', 'X')
        turnImg.setAttribute('data-turn', 'O')
        turnImg.src = xSymbol
        this.modalContainer.setAttribute('data-modal-active', false)
    }

    resetGame() {
        this.p1.points = 0
        this.p2.points = 0
        this.draw = 0

        this.renderPoints()
    }

    checkIsDraw() {
        const tiles = [...document.querySelectorAll('.game-tile')]
        return tiles.every((tile) => {
            return (
                tile.classList.contains('X-marker') ||
                tile.classList.contains('O-marker')
            )
        })
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

        return WINING_COMBINATION.some((combination) => {
            return combination.every((index) => {
                return tiles[index].classList.contains(currendClass)
            })
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

    setPlayerName() {
        const playerName1 = document.getElementById('playerName1')
        const playerName2 = document.getElementById('playerName2')
        if (this.p1.symbol === 'X' && this.p2.symbol === 'O') {
            playerName1.textContent = `${this.p1.symbol} (${this.p1.player})`
            playerName2.textContent = `${this.p2.symbol} (${this.p2.player})`
        }
        if (this.p1.symbol === 'O' && this.p2.symbol === 'X') {
            playerName1.textContent = `${this.p2.symbol} (${this.p2.player})`
            playerName2.textContent = `${this.p1.symbol} (${this.p1.player})`
        }
    }

    renderPoints() {
        const p1Score = document.querySelector('#playerScore')
        const tieScore = document.querySelector('#tieScore')
        const p2Score = document.querySelector('#player2Score')
        p1Score.textContent = this.p1.points
        p2Score.textContent = this.p2.points
        tieScore.textContent = this.draw
    }
}
