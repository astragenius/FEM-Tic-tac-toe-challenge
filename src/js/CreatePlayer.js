export function CreatePlayer(symbol, player) {
    this.symbol = symbol
    this.points = 0
    this.player = player

    const setPoint = () => {
        this.points++
    }

    const getPoints = () => {
        return this.points
    }

    const getPlayer = () => {
        return this.player
    }

    const getSymbol = () => {
        return this.symbol
    }

    return { setPoint, getPlayer, getPoints, getSymbol }
}
