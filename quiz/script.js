// НАЧАЛО 13.50

const startBtn = document.getElementById("start-button")
const usernameInput = document.getElementById('username-input')

usernameInput.addEventListener('input', () => {
    startBtn.disabled = !usernameInput.value
})

startBtn.addEventListener('click', () => {
    localStorage.setItem('username', usernameInput.value)
})
