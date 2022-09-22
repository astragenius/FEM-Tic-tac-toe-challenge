import xSymbol from '../assets/img/toggle-x.svg'
import OSymbol from '../assets/img/toggle-o.svg'

export class GameBoard {
    constructor(p1, p2) {
        /*  this.p1 = {
            symbol: p1.symbol,
            points: p1.points,
            player: p1.player,
        }

        this.p2 = {
            symbol: p2.symbol,
            points: p2.points,
            player: p2.player,
        } */

        this.p1 = p1
        this.p2 = p2
        this.player1 = 'Player 1'
        this.playerX = 'X'
        this.playerO = 'O'
        this.player2 = 'Player 2'
        this.draw = 0
    }

    static resetGameBoard() {
        const tiles = [...document.querySelectorAll('.game-tile')]
        const turnImg = document.querySelector('.player-turn-symbol')
        const gameField = document.querySelector('.game-field')
        this.modalContainer = document.querySelector('.modal-container')

        tiles.forEach((tile) => {
            tile.classList.remove('x-marker')
            tile.classList.remove('o-marker')
        })
        gameField.setAttribute('data-turn', 'X')
        turnImg.src = xSymbol
        this.modalContainer.setAttribute('data-modal-active', false)
    }

    resetGame() {
        this.p1 = 0
        this.p2 = 0
        this.draw = 0

        this.renderPoints()
    }

    checkIsDraw() {
        const tiles = [...document.querySelectorAll('.game-tile')]
        return tiles.every((tile) => {
            return (
                tile.classList.contains('x-marker') ||
                tile.classList.contains('o-marker')
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
        this.p1++
    }

    addPointsP2() {
        this.p2++
    }

    setDraw() {
        this.draw++
    }

    setPlayerName() {
        const playerName1 = document.getElementById('playerName1')
        const playerName2 = document.getElementById('playerName2')
        playerName1.textContent = `${this.playerX} (${this.player1})`
        playerName2.textContent = `${this.playerO} (${this.player2})`
    }

    renderPoints() {
        const p1Score = document.querySelector('#playerScore')
        const tieScore = document.querySelector('#tieScore')
        const p2Score = document.querySelector('#player2Score')
        p1Score.textContent = this.p1
        p2Score.textContent = this.p2
        tieScore.textContent = this.draw
    }
}
