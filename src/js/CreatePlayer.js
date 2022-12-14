import XSymbol from '../assets/img/toggle-x.svg'
import OSymbol from '../assets/img/toggle-o.svg'
import { renderWinner } from '..'

export class Player {
    constructor(player, symbol) {
        this.player = player
        this.symbol = symbol
        this.points = 0
        this.playerTurn = symbol === 'X' ? true : false
    }

    setPoints() {
        this.points++
    }

    getPoints() {
        return this.points
    }

    getSymbol() {
        return this.symbol
    }
    getPlayer() {
        return this.player
    }
}

export class CPU extends Player {
    cpuMove() {
        let self = this

        let oponent
        if (self.symbol === 'X') {
            oponent = 'O'
        } else {
            oponent = 'X'
        }

        const tiles = [...document.querySelectorAll('.game-tile')]
        const turnImg = document.querySelector('.player-turn-symbol')
        const gameField = document.querySelector('.game-field')
        pointerEvents('none')

        function randomNumber(num) {
            return Math.floor(Math.random() * num)
        }
        function setSymbol(index) {
            if (filteredTiles.length === 0) {
                return
            }

            turnImg.setAttribute('data-turn', oponent)
            filteredTiles[index].classList.add(`${self.symbol}-marker`)
            gameField.setAttribute('data-turn', oponent)

            turnImg.src = self.symbol === 'X' ? OSymbol : XSymbol
        }

        const filteredTiles = tiles.filter((tile) => {
            return (
                !tile.classList.contains('X-marker') &&
                !tile.classList.contains('O-marker')
            )
        })

        function pointerEvents(trigger) {
            tiles.forEach((tile) => {
                tile.style.pointerEvents = trigger
            })
        }

        let tilesLength = filteredTiles.length
        let randomTile = randomNumber(tilesLength)
        setTimeout(() => {
            setSymbol(randomTile)
            pointerEvents('')
            renderWinner(self)
        }, 1000)

        return
    }
}
