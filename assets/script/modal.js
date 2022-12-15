// This is script for buy ticket button

const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

// Function to show Buy ticket modal
function showBuyTicket() {
    modal.classList.add('open')
}
// Function to hide Buy ticket modal
function hideBuyTicket() {
    modal.classList.remove('open')
}

// for loop for each "buy ticket" button
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTicket)
}

// Listen click event of Close button
modalClose.addEventListener('click', hideBuyTicket)

modal.addEventListener('click', hideBuyTicket)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})