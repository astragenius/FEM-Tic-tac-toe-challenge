export class Player {
    constructor(player, symbol) {
        this.player = player
        this.symbol = symbol
        this.points = 0
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
    constructor() {
        super()
    }
}
