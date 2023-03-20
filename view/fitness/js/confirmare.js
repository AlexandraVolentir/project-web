document.querySelector('#uber').addEventListener('click', goToUber)
document.querySelector('#masaj').addEventListener('click', goToMasaj)
document.querySelector('#fitness').addEventListener('click', goToFitness)
document.querySelector('#home').addEventListener('click', goToHome)
function goToUber() {
    window.location.href = '../html/uberHomePage.html'
}
function goToMasaj() {
    window.location.href = '../../masaj/html/masajHomepage.html'
}
function goToFitness() {
    window.location.href = '../../fitness/html/fitness.html'
}
function goToHome() {
    window.location.href = '../../index.html'
}

$(function (){
    var $memberships = $('#detalii-cursa')
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/api/v1/fitness/membership',
        success: function(memberships) {
            $memberships.append('<h3>Abonament confirmat</h3><p>nr ' + memberships[0]._id + '</p>')
        }
    })
    .fail(function (msg) {
        console.log('FAIL');
    })
})
