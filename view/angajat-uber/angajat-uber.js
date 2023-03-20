$(function (){
    var $container = $('.table-container')
    $( ".container" ).remove()
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/api/v1/uber/schedule',
        success: function(schedules) {
            $container.append('<table class = "container" id="container"><thead><tr><th><h1>Start</h1></th><th><h1>Destinatia&nbsp&nbsp&nbsp</h1></th><th><h1>Dist(km)&nbsp&nbsp&nbsp</h1></th><th><h1>Pret(lei)&nbsp&nbsp&nbsp</h1></th><th><h1>Urbana&nbsp&nbsp&nbsp&nbsp</h1></th><th><h1>Judet/zona&nbsp&nbsp&nbsp&nbsp</h1></th></tr></thead></table>')
            var $schedules = $('#container')
            $.each(schedules, function(i, schedule) {
                //console.log(schedule)
                $schedules.append('<tr><td>' + schedule.start + '</td><td>' + schedule.destinatie + '</td><td>' + schedule.distanta + '</td><td>' + schedule.pret + '</td><td>' + schedule.urbana + '</td><td>' + schedule.judet + '</td></tr>')
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
            url: 'http://localhost:1234/api/v1/uber/schedule',
            success: function(schedules) {
                $container.append('<table class = "container" id="container"><thead><tr><th><h1>Start</h1></th><th><h1>Destinatia&nbsp&nbsp&nbsp</h1></th><th><h1>Dist(km)&nbsp&nbsp&nbsp</h1></th><th><h1>Pret(lei)&nbsp&nbsp&nbsp</h1></th><th><h1>Urbana&nbsp&nbsp&nbsp&nbsp</h1></th><th><h1>Judet/zona&nbsp&nbsp&nbsp&nbsp</h1></th></tr></thead></table>')
                var $schedules = $('#container')
                $.each(schedules, function(i, schedule) {
                    //console.log(schedule)
                    $schedules.append('<tr><td>' + schedule.start + '</td><td>' + schedule.destinatie + '</td><td>' + schedule.distanta + '</td><td>' + schedule.pret + '</td><td>' + schedule.urbana + '</td><td>' + schedule.judet + '</td></tr>')
                }) 
            }
        }).done(function () {
            console.log('SUCCESS');
        }).fail(function (msg) {
            console.log('FAIL');
        })
    })
}, 30000)