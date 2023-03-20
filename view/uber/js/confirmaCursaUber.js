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
    var $schedules = $('#detalii-cursa')
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/api/v1/uber/schedule',
        success: function(schedules) {
            $schedules.append('<h3>Cursa confirmata</h3><p>Cursa nr ' + schedules[0]._id + '</p>')
            var $timpDiv = $('#timp-div')
            $timpDiv.append('<p id="timp">Ajunge in ' + generateTime() + ' minute</p><h3 id="nr-masina">IS-' + generateTime() + '-UBR</h3>')
            console.log(schedules[0]._id)
        }
    })
    .fail(function (msg) {
        console.log('FAIL');
    })
})
function generateTime() {
    const min = 5
    const max = 50

    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor( rand * difference);

    rand = rand + min;

    return rand;
}
