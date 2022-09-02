import './scss/index.scss'
import './assets/img/icon-restart.svg'
import logoImg from './assets/img/logo.svg'
import xSymbol from './assets/img/toggle-x.svg'

const logo = document.querySelector('.game-menu-logo')
const headerTurn = document.querySelector('.player-turn-symbol')
const gameBoardLogo = document.querySelector('.game-board-logo')
const btnReload = document.querySelector('.btn-reload')

btnReload.addEventListener('click', () => {
    console.log('test')
})

//logo.src = logoImg
headerTurn.src = xSymbol
gameBoardLogo.src = logoImg
