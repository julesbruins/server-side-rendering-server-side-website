const openButton = document.querySelector('.open-button')

openButton.addEventListener('click', () => {
    console.log('werkt het?')
    container.classList.toggle('active')
})
