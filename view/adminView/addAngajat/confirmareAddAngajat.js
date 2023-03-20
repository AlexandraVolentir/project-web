document.querySelector('#statistici').addEventListener('click', goToStatistici)
document.querySelector('#feedback').addEventListener('click', goToFeedback)
document.querySelector('#addAngajat').addEventListener('click', goToAddAngajat)
document.querySelector('#deconectare').addEventListener('click', goToDeconectare)
document.querySelector('#home').addEventListener('click', goToHome)
function goToFeedback() {
    window.location.href = '../../feedback/feedback.html'
}
function goToStatistici() {
    window.location.href = '../../../statistics_page/statistics_page.html'
}
function goToAddAngajat() {
    window.location.href = 'addAngajat.html'
}
function goToDeconectare() {
    window.location.href = '../../../index.html'
}
function goToHome() {
    window.location.href = '../../adminIndex.html'
}