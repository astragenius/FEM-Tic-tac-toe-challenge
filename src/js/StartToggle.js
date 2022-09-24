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
            } else if (input === false) {
            }
        })
    }

    return { addListener }
})()
