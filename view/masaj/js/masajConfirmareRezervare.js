document.querySelector('#uber').addEventListener('click', goToUber)
document.querySelector('#masaj').addEventListener('click', goToMasaj)
document.querySelector('#fitness').addEventListener('click', goToFitness)
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
function goToHome() {
    window.location.href = '../../index.html'
}

// AJAX
$(function (){
    var $rezervare = $('#detalii-rezervare')
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/api/v1/uber/schedule',
        success: function(masaje) {
            let nr = masaje[0]._id.slice(0, 11)
            $rezervare.append('<h3>Rezervare confirmata</h3><p>Rezervare nr ' + nr + '</p>')
        }
    })
    .fail(function (msg) {
        console.log('FAIL');
    })
})

document.querySelector('#terapii').addEventListener('click', goToTerapii)
function goToTerapii() {
    window.location.href = '../html/masajTerapii.html'
}
