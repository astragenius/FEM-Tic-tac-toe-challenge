import logoIMG from '../assets/img/logo.svg'
import { CreatePlayer } from './CreatePlayer'

export const StartToggle = (function () {
    const addListener = () => {
        const logo = document.querySelector('.game-menu-logo')

        logo.src = logoIMG
        document.querySelector('.btn-2').addEventListener('click', () => {
            const input = document.querySelector('.checkbox').checked
            let player1
            let player2

            if (input === true) {
                player1 = new CreatePlayer('X', 'Player 1')
                player2 = new CreatePlayer('O', 'Player 2')
            } else if (input === false) {
                player1 = new CreatePlayer('O', 'Player 1')
                player2 = new CreatePlayer('X', 'Player 2')
            }
        })
    }

    return { addListener }
})()
