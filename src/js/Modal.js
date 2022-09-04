import { update } from '..'

export class Modal {
    constructor(props) {
        this.state = {
            playerText: props.playerText,
            headText: props.headText,
            playerSymbol: props.playerSymbol,
            btnText1: props.btnText1,
            btnText2: props.btnText2,
        }
    }

    newState(newProps) {
        this.state = {
            playerText: newProps.playerText,
            headText: newProps.headText,
            playerSymbol: newProps.playerSymbol,
            btnText1: newProps.btnText1,
            btnText2: newProps.btnText2,
        }

        update()
    }

    close() {}

    render() {
        return `<section class="modal bg-dark-navy1 full-bleed">
    
                <div class="modal-content">
                    <p class="uppercase clr-neutral-silver fw-700 fs-14 letter-spacing-xs margin-block-end-24">${this.state.playerText}</p>
                    <h3 data-winner="${this.state.playerSymbol}" class="modal-titel | fs-24 uppercase clr-neutral-silver fw-700 letter-spacing-m margin-block-end-24">${this.state.headText}</h3>
                    <div class="modal-button-container">
                        <button  class="btn btn-sec-2 | fs-16 fw-700 letter-spacing-xs bg-neutral-silver padding-16">${this.state.btnText1}</button>
                        <button class="btn btn-sec-1 | fs-16 fw-700 letter-spacing-xs bg-light-yellow padding-16">${this.state.btnText2}</button>
                    </div>
                </div>
            </section>`
    }
}
