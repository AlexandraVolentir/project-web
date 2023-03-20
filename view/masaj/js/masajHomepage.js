document.querySelector('#rezerva1').addEventListener('click', goToRezervaMasaj)
document.querySelector('#rezerva2').addEventListener('click', goToRezervaMasaj)
document.querySelector('#rezerva3').addEventListener('click', goToRezervaMasaj)
document.querySelector('#catre-terapii-btn').addEventListener('click', goToTerapii)
function goToRezervaMasaj() {
    window.location.href = '../html/rezervaMasaj.html'
}
function goToTerapii() {
    window.location.href = '../html/masajTerapii.html'
}
document.querySelector('#uber').addEventListener('click', goToUber)
document.querySelector('#masaj').addEventListener('click', goToMasaj)
document.querySelector('#fitness').addEventListener('click', goToFitness)
document.querySelector('#login').addEventListener('click', goToLogin)
document.querySelector('#home').addEventListener('click', goToHome)
function goToUber() {
    window.location.href = '../../uber/html/uberHomePage.html'
}
function goToMasaj() {
    window.location.href = '../html/masajHomepage.html'
}
function goToFitness() {
    window.location.href = '../../fitness/html/fitness.html'
}
function goToLogin() {
    window.location.href = '../../login/login.html'
}
function goToHome() {
    window.location.href = '../../index.html'
}