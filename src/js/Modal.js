export const RenderModal = (name) => {
    const modalContent = `<section class="modal bg-dark-navy1 full-bleed">
    
    <div class="modal-content">
        <p class="uppercase clr-neutral-silver fw-700 fs-14 letter-spacing-xs margin-block-end-24">You won!</p>
        <h3 data-winner="x" class="modal-titel | fs-24 uppercase clr-neutral-silver fw-700 letter-spacing-m margin-block-end-24">Takes The round</h3>
        <div class="modal-button-container">
            <button class="btn btn-sec-2 | fs-16 fw-700 letter-spacing-xs bg-neutral-silver padding-16">quit</button>
            <button class="btn btn-sec-1 | fs-16 fw-700 letter-spacing-xs bg-light-yellow padding-16">Next Round</button>
        </div>
    </div>
</section>`

    return modalContent
}
