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
