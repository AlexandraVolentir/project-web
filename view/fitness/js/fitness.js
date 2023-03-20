document.querySelector('#uber').addEventListener('click', goToUber)
document.querySelector('#masaj').addEventListener('click', goToMasaj)
document.querySelector('#fitness').addEventListener('click', goToFitness)
document.querySelector('#login').addEventListener('click', goToLogin)
document.querySelector('#home').addEventListener('click', goToHome)
function goToUber() {
    window.location.href = '../../uber/html/uberHomePage.html'
}
function goToMasaj() {
    window.location.href = '../../masaj/html/masajHomepage.html'
}
function goToFitness() {
    window.location.href = '../html/fitness.html'
}
function goToLogin() {
    window.location.href = '../../login/login.html'
}
function goToHome() {
    window.location.href = '../../index.html'
}
// AJAX
$(function (){
    var $abonamente = $('#abonamente')
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/api/v1/fitness/membership',
    }).done(function(abonamente) {
        let abonamenteHtml = []
        let abonamenteTip = []
        let contor = 0
        $.each(abonamente, function(i, abonament) {
            if(!abonamenteTip.includes(abonament.tip))
            {
                abonamenteTip[contor] = abonament.tip
                abonamenteHtml[contor++] = abonament
            }
        }) 
        let idRow = 0
        $.each(abonamenteHtml, function(i, abonament) {
            if(i % 2 == 0) {
                $abonamente.append('<div class="row" id="row' + i + '"></div>')
                idRow = '#row'.concat(i)
            }
            $row = $(idRow) 
            $row.append('<div class="column" itemprop="description"><div class="card" itemscope itemtype="https://schema.org/PriceSpecification"><h3 itemprop="name">' + abonament.tip + '</h3><br><hr><br><p itemprop="price" >' + abonament.pret + 
            ' Lei</p><p itemprop="description">' + abonament.descriere + '</p><br><button class="Abutton" id="buton' + i + '">Ia-ți abonament</button></div></div>') 
        }) 
        for(let i = 0; i < 8; i++) {
            let id = '#buton'.concat(i)
            document.querySelector(id).addEventListener('click', goToIaAbonament)
        }
        
    }).fail(function (msg) {
        console.log('FAIL');
    })
})
function goToIaAbonament() {
    window.location.href = '../html/Ia-tiAbonament.html'
}