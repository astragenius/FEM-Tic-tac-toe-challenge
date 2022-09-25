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
        const tiles = [...document.querySelectorAll('.game-tile')]
        const turnImg = document.querySelector('.player-turn-symbol')
        const gameField = document.querySelector('.game-field')
        for (let i = 0; i < tiles.length; i++) {
            if (
                !tiles[i].classList.contains('x-marker') ||
                !tiles[i].classList.contains('o-marker')
            ) {
                tiles[i].classList.add('x-marker')
                gameField.setAttribute('data-turn', 'O')
                turnImg.src = OSymbol
                break
            }
        }
    }
}
