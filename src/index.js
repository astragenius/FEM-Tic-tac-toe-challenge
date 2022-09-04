import './scss/index.scss'
import './assets/img/icon-restart.svg'
import logoImg from './assets/img/logo.svg'
import xSymbol from './assets/img/toggle-x.svg'
import { Modal } from './js/Modal'

const logo = document.querySelector('.game-menu-logo')
const headerTurn = document.querySelector('.player-turn-symbol')
const gameBoardLogo = document.querySelector('.game-board-logo')
const btnReload = document.querySelector('.btn-reload')
const modal = document.querySelector('.modal-container')

let dataRestart = {
    playerText: '',
    headText: 'restart game?',
    playerSymbol: 'neutral',
    btnText1: 'no, cancel',
    btnText2: 'yes, restart',
}
let dataTied = {
    playerText: '',
    headText: 'Round tied',
    playerSymbol: 'neutral',
    btnText1: 'quit',
    btnText2: 'next round',
}
let dataPlayerXWin = {
    playerText: 'you won!',
    playerSymbol: 'X',
    headText: 'takes the round',
    btnText1: 'quit',
    btnText2: 'next round',
}
let dataPlayerXlose = {
    playerText: 'oh no you lose..',
    headText: 'takes the round',
    playerSymbol: 'X',
    btnText1: 'quit',
    btnText2: 'next round',
}

export function update() {
    document.querySelector('.modal-container').innerHTML = newModal.render()
}

const newModal = new Modal(dataPlayerXlose)
modal.innerHTML = newModal.render()

btnReload.addEventListener('click', () => {
    if (modal.getAttribute('data-modal-active') === 'false') {
        modal.setAttribute('data-modal-active', true)
    }
})

//logo.src = logoImg
headerTurn.src = xSymbol
gameBoardLogo.src = logoImg
