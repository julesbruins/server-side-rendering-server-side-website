const openButton = document.querySelector('.open-button')
const container = document.querySelector('.nav-container')

openButton.addEventListener('click', () => {
    console.log('werkt het?')
    container.classList.toggle('active')
})
