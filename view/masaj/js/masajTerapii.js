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
    var $indianScalpDiv = $('#indian-scalp-div')
    var $backNeckShouldersDiv = $('#back-neck-shoulders-div')
    var $aromaticDiv = $('#aromatic-div')
    var $hotStoneDiv = $('#hot-stone-div')
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/api/v1/masaj/massages',
    }).done(function(masaje) {
        let masajeHtml = []
        let masasjeTip = []
        let contor = 0
        let counter = 1
        $.each(masaje, function(i, masaj) {
            if(!masasjeTip.includes(masaj.tip))
            {
                masasjeTip[contor] = masaj.tip
                masajeHtml[contor++] = masaj
            }
        }) 
        $.each(masajeHtml, function(i, masaj) {
            // console.log(masaj)
            switch(masaj.tip) {
                case "Indian Scalp Massage":
                    let id1 = "rezerva".concat(counter++)
                    $indianScalpDiv.append('<div class="detalii-masaj"><h2 class="titlu-masaj">' + masaj.tip + '</h2><p class="timp-masaj">' + masaj.durata + '</p><p class="pret-masaj">' + masaj.pret + 'RON</p><button class="rezerva" id="' + id1 + '">Rezerva</button></div>')
                    break
                case "Back, Neck and Shoulders":
                    let id2 = "rezerva".concat(counter++)
                    $backNeckShouldersDiv.append('<div class="detalii-masaj"><h2 class="titlu-masaj">' + masaj.tip + '</h2><p class="timp-masaj">' + masaj.durata + '</p><p class="pret-masaj">' + masaj.pret + 'RON</p><button class="rezerva" id="' + id2 + '">Rezerva</button></div>')
                    break
                case "Aromatic Body Relax Massage":
                    let id3 = "rezerva".concat(counter++)
                    $aromaticDiv.append('<div class="detalii-masaj"><h2 class="titlu-masaj">' + masaj.tip + '</h2><p class="timp-masaj">' + masaj.durata + '</p><p class="pret-masaj">' + masaj.pret + 'RON</p><button class="rezerva" id="' + id3 + '">Rezerva</button></div>')
                    break
                case "Hot Stone Massage":
                    let id = "rezerva".concat(counter++)
                    $hotStoneDiv.append('<div class="detalii-masaj"><h2 class="titlu-masaj">' + masaj.tip + '</h2><p class="timp-masaj">' + masaj.durata + '</p><p class="pret-masaj">' + masaj.pret + 'RON</p><button class="rezerva" id="' + id + '">Rezerva</button></div>')
                    break
            }    
        }) 
        document.querySelector('#rezerva1').addEventListener('click', goToRezervaMasaj)
        document.querySelector('#rezerva2').addEventListener('click', goToRezervaMasaj)
        document.querySelector('#rezerva3').addEventListener('click', goToRezervaMasaj)
        document.querySelector('#rezerva4').addEventListener('click', goToRezervaMasaj)
        
    }).fail(function (msg) {
        console.log('FAIL');
    })
})


function goToRezervaMasaj() {
    window.location.href = '../html/rezervaMasaj.html'
}