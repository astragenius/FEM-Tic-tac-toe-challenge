import logoIMG from '../assets/img/logo.svg'
import { Player, CPU } from './CreatePlayer'

export const StartToggle = (function () {
    const input = document.querySelector('.checkbox').checked
    const logo = document.querySelector('.game-menu-logo')
    logo.src = logoIMG
    const createPvC = () => {
        let p1, p2
        if (input === true) {
            p1 = new Player('Player1', 'X')
            p2 = new CPU('CPU', 'O')
        } else if (input === false) {
            p1 = new Player('Player1', 'O')
            p2 = new CPU('CPU', 'X')
        }

        return [p1, p2]
    }
    const createPvP = () => {
        let p1, p2
        if (input === true) {
            p1 = new Player('Player1', 'X')
            p2 = new Player('Player2', 'O')
        } else if (input === false) {
            p1 = new Player('Player1', 'O')
            p2 = new Player('Player2', 'X')
        }

        return p1, p2
    }

    return { createPvC, createPvP }
})()
