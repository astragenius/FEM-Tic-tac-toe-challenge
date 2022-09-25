import logoIMG from '../assets/img/logo.svg'
import { Player, CPU } from './CreatePlayer'

export const StartToggle = (function () {
    const input = document.querySelector('.checkbox').checked
    const logo = document.querySelector('.game-menu-logo')
    logo.src = logoIMG
})()
