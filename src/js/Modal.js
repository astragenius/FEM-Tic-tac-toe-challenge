export class Modal {
    constructor(props, player = '') {
        this.state = {
            playerText: props.playerText,
            headText: props.headText,
            playerSymbol: props.playerSymbol,
            btnText1: props.btnText1,
            btnText2: props.btnText2,
            closeFunc: props.closeFunc,
            btnSec1Function: props.btnSec1Function,
        }

        this.modalContainer = document.querySelector('.modal-container')
    }

    newState(newProps, player = '') {
        this.state = {
            playerText: newProps.playerText,
            headText: newProps.headText,
            playerSymbol: newProps.playerSymbol,
            btnText1: newProps.btnText1,
            btnText2: newProps.btnText2,
            closeFunc: newProps.closeFunc,
            btnSec1Function: newProps.btnSec1Function,
        }
        this.player = player
    }

    update() {
        this.modalContainer.appendChild(this.render())
    }

    delModal() {
        if (this.modalContainer.contains(document.querySelector('.modal'))) {
            this.modalContainer.removeChild(document.querySelector('.modal'))
        } else {
            return
        }
    }

    render() {
        this.delModal()
        const modalSectionStyle = `modal bg-dark-navy1 full-bleed`
        const modalSection = document.createElement('section')
        modalSection.className += modalSectionStyle

        const modalContent = document.createElement('div')
        modalContent.classList.add('modal-content')

        const playerTextStyle = `uppercase clr-neutral-silver fw-700 fs-14 letter-spacing-xs margin-block-end-24`
        const playerText = document.createElement('p')
        playerText.className += playerTextStyle
        if (this.player.player === '') {
            playerText.textContent = ''
        } else if (this.player.player === 'YOU') {
            playerText.textContent = `${this.player.player} won!`
        } else if (this.player.player === 'CPU') {
            playerText.textContent = `Oh no, you lost...`
        } else {
            playerText.textContent = `${this.player.player} winns!`
        }

        const headTextStyle = `modal-titel | fs-24 uppercase clr-neutral-silver fw-700 letter-spacing-m margin-block-end-24`
        const headText = document.createElement('h3')
        headText.className += headTextStyle
        headText.setAttribute('data-winner', this.player.symbol)

        headText.textContent = this.state.headText

        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('modal-button-container')

        const btnStyle1 = `btn btn-sec-1 | fs-16 fw-700 letter-spacing-xs bg-light-yellow padding-16`
        const btnStyle2 = `btn btn-sec-2 | fs-16 fw-700 letter-spacing-xs bg-neutral-silver padding-16`
        const btnSec1 = document.createElement('button')
        const btnSec2 = document.createElement('button')
        btnSec1.className += btnStyle1
        btnSec2.className += btnStyle2

        btnSec2.addEventListener('click', () => {
            this.state.closeFunc()
        })
        btnSec1.addEventListener('click', () => {
            this.state.btnSec1Function()
        })

        btnSec1.textContent = this.state.btnText2
        btnSec2.textContent = this.state.btnText1

        buttonContainer.appendChild(btnSec2)
        buttonContainer.appendChild(btnSec1)

        modalContent.appendChild(playerText)
        modalContent.appendChild(headText)
        modalContent.appendChild(buttonContainer)
        modalSection.appendChild(modalContent)

        return modalSection
    }
}
