document.querySelector('#statistici').addEventListener('click', goToStatistici)
document.querySelector('#feedback').addEventListener('click', goToFeedback)
document.querySelector('#addAngajat').addEventListener('click', goToAddAngajat)
document.querySelector('#deconectare').addEventListener('click', goToDeconectare)
document.querySelector('#home').addEventListener('click', goToHome)
function goToFeedback() {
    window.location.href = 'feedback.html'
}
function goToStatistici() {
    window.location.href = '../../statistics_page/statistics_page.html'
}
function goToAddAngajat() {
    window.location.href = '../addAngajat/html/addAngajat.html'
}
function goToDeconectare() {
    window.location.href = '../../index.html'
}
function goToHome() {
    window.location.href = '../adminIndex.html'
}
$(function (){
    var $container = $('.table-container')
    $( ".container" ).remove()
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/api/v1/feedback',
        success: function(schedules) {
            $container.append('<table class = "container" id="container"><thead><tr><th><h1> Data</h1></th><th><h1>Oras        </h1></th><th><h1>Serviciu&nbsp</h1></th><th><h1>Calificativ</h1></th><th><h1>Descriere</h1></th></tr></thead></table>')
            var $schedules = $('#container')
            $.each(schedules, function(i, schedule) {
                $schedules.append('<tr><td>' + schedule.data + '</td><td>' + schedule.oras + '</td><td>' + schedule.serviciu + '</td><td>' + schedule.calificativ + '</td><td>' + schedule.descriere + '</td></tr>')
            }) 
        }
    }).done(function () {
        console.log('SUCCESS');
    }).fail(function (msg) {
        console.log('FAIL');
    })
})
setInterval(function() {
    $(function (){
        var $container = $('.table-container')
        $( ".container" ).remove()
        $.ajax({
            type: 'GET',
            url: 'http://localhost:1234/api/v1/feedback',
            success: function(schedules) {
                $container.append('<table class = "container" id="container"><thead><tr><th><h1> Data</h1></th><th><h1>Oras        </h1></th><th><h1>Serviciu&nbsp</h1></th><th><h1>Calificativ</h1></th><th><h1>Descriere</h1></th></tr></thead></table>')
                var $schedules = $('#container')
                $.each(schedules, function(i, schedule) {
                    $schedules.append('<tr><td>' + schedule.data + '</td><td>' + schedule.oras + '</td><td>' + schedule.serviciu + '</td><td>' + schedule.calificativ + '</td><td>' + schedule.descriere + '</td></tr>')
                }) 
            }
        }).done(function () {
            console.log('SUCCESS');
        }).fail(function (msg) {
            console.log('FAIL');
        })
    })
}, 30000)