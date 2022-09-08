import logoIMG from '../assets/img/logo.svg'
import { CreatePlayer } from './CreatePlayer'

export const StartToggle = (function () {
    const Toggle = () => {
        return ` <label class="toggle-label" for="toggle">
                <input class="checkbox" type="checkbox" name="" id="toggle">

                <svg class="toggle-symbol-x" viewbox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" class="fill-symbol-x" fill="#A8BFC9" fill-rule="evenodd"/></svg>

                 <span class="toggle-btn"></span>


                <svg class="toggle-symbol-o" viewbox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" class="fill-symbol-o" fill="#1A2A33;"/></svg>


        </label>`
    }

    const PlayerCpuBtn = () => {
        return `<button class="btn btn-1 | fs-20 fw-700 letter-spacing-s bg-light-yellow padding-inline-16 padding-block-16 uppercase">New game (vs Cpu)</button>`
    }
    const PlayerVsPlayer = () => {
        return `<button class="btn btn-2 | fs-20 fw-700 letter-spacing-s bg-light-blue padding-inline-16 padding-block-16 uppercase">New game (vs Player)</button>`
    }

    const render = (selector) => {
        document.querySelector(
            selector
        ).innerHTML = ` <section class="game-menu flow">
        <img class="game-menu-logo | margin-auto" src="./assets/img/logo.svg" alt="">
            <div class="toggle-wrapper">
            <p class="fs-16 fw-700 clr-neutral-silver uppercase letter-spacing-xs margin-block-24">Pick Player 1's Mark</p>
            
            ${Toggle()}

            <p class="bottom-p | fs-16 fw-500 clr-neutral-silver uppercase letter-spacing-xs margin-block-24">Remember: x Goes First</p>
        </div>
        <div class="button-container flow" style="--flow-spacer: 1em">
           ${PlayerCpuBtn()}
           ${PlayerVsPlayer()}
        </div>
    </section>`
    }

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

    return { render, addListener }
})()
