import './scss/index.scss'
import './assets/img/icon-restart.svg'
import logoImg from './assets/img/logo.svg'
import xSymbol from './assets/img/toggle-x.svg'
import { RenderModal } from './js/Modal'

const logo = document.querySelector('.game-menu-logo')
const headerTurn = document.querySelector('.player-turn-symbol')
const gameBoardLogo = document.querySelector('.game-board-logo')
const btnReload = document.querySelector('.btn-reload')
const modal = document.querySelector('.modal-container')

btnReload.addEventListener('click', () => {
    if (modal.getAttribute('data-modal-active') === 'false') {
        modal.setAttribute('data-modal-active', true)
    }
})

class Modal {
    constructor(props) {
        this.state = {}
    }
}

//logo.src = logoImg
headerTurn.src = xSymbol
gameBoardLogo.src = logoImg
