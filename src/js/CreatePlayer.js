import xSymbol from '../assets/img/toggle-x.svg'
import OSymbol from '../assets/img/toggle-o.svg'
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
        console.log(self.playerTurn)

        const tiles = [...document.querySelectorAll('.game-tile')]
        const turnImg = document.querySelector('.player-turn-symbol')
        const gameField = document.querySelector('.game-field')

        function randomNumber(num) {
            return Math.floor(Math.random() * num)
        }
        function setSymbol(index) {
            filteredTiles[index].classList.add('x-marker')
            gameField.setAttribute('data-turn', 'O')
            turnImg.setAttribute('data-turn', 'O')
            turnImg.src = OSymbol
            self.playerTurn = false
        }

        const filteredTiles = tiles.filter((tile) => {
            return (
                !tile.classList.contains('x-marker') &&
                !tile.classList.contains('o-marker')
            )
        })

        let tilesLength = filteredTiles.length
        let randomTile = randomNumber(tilesLength)
        setSymbol(randomTile)
    }
}
