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
function getZileDisponibile() {
    $( ".zile" ).remove()
    let $data = $('#data')
    let tipSelectat = document.getElementById('tip').value
    let oras = document.getElementById('oras').value
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/api/v1/masaj/massageEmployee',
        success: function(masaje) {
            let zile = []
            if(oras == '') {
                oras = 'Iasi'
            }
            
            $.each(masaje, function(i, masaj) {
                // console.log(masaj.luni.durata)
                if(masaj.oras == oras && masaj.tipMasaj == tipSelectat) {
                    $.each(masaj.luni.durata, function(j, ora) {             
                        if(ora.rezervat == 'Liber') {
                            zile[0] = masaj.luni.data
                            return false;
                        }
                    })
                    $.each(masaj.marti.durata, function(j, ora) {             
                        if(ora.rezervat == 'Liber') {
                            zile[1] = masaj.marti.data
                            return false;
                        }
                    })
                    $.each(masaj.miercuri.durata, function(j, ora) {             
                        if(ora.rezervat == 'Liber') {
                            zile[2] = masaj.miercuri.data
                            return false;
                        }
                    })
                    $.each(masaj.joi.durata, function(j, ora) {             
                        if(ora.rezervat == 'Liber') {
                            zile[3] = masaj.joi.data
                            return false;
                        }
                    })
                    $.each(masaj.vineri.durata, function(j, ora) {             
                        if(ora.rezervat == 'Liber') {
                            zile[4] = masaj.vineri.data
                            return false;
                        }
                    })
                }
            }) 
            $.each(zile, function(k, zi){
                if(zi !== undefined)
                {
                    $data.append('<option value="'+ zi + '" class="zile">'+ zi +'</option>')
                }
            })
        }
    }).fail(function (msg) {
        console.log('FAIL');
    })
}
let idAngajat = ''
function getOreDisponibile() {
    $( ".oreDisponibile" ).remove()
    let $ora = $('#ora')
    let dataSelectata = document.getElementById('data').value
    let tipSelectat = document.getElementById('tip').value
    var oras = document.getElementById('oras').value
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/api/v1/masaj/massageEmployee',
        success: function(masaje) {
            let ore = []
            if(oras == '') {
                oras = 'Iasi'
            }
            $.each(masaje, function(i, masaj) {
                if(masaj.oras == oras && masaj.tipMasaj == tipSelectat) {
                    switch(dataSelectata) {
                        case masaj.luni.data:
                            $.each(masaj.luni.durata, function(j, ora) {             
                                if(ora.rezervat == 'Liber') {
                                    ore[j] = ora.interval
                                }
                            })
                            idAngajat = masaj._id
                            console.log(`idAngajat=${idAngajat}`)
                            break
                        case masaj.marti.data:
                            $.each(masaj.marti.durata, function(j, ora) {             
                                if(ora.rezervat == 'Liber') {
                                    ore[j] = ora.interval
                                }
                            })
                            idAngajat = masaj._id
                            console.log(`idAngajat=${idAngajat}`)
                            break
                        case masaj.miercuri.data:
                            $.each(masaj.miercuri.durata, function(j, ora) {             
                                if(ora.rezervat == 'Liber') {
                                    ore[j] = ora.interval
                                }
                            })
                            idAngajat = masaj._id
                            console.log(`idAngajat=${idAngajat}`)
                            break
                        case masaj.joi.data:
                            $.each(masaj.joi.durata, function(j, ora) {             
                                if(ora.rezervat == 'Liber') {
                                    ore[j] = ora.interval
                                }
                            })
                            idAngajat = masaj._id
                            console.log(`idAngajat=${idAngajat}`)
                            break
                        case masaj.vineri.data:
                            $.each(masaj.vineri.durata, function(j, ora) {             
                                if(ora.rezervat == 'Liber') {
                                    ore[j] = ora.interval
                                }
                            })
                            idAngajat = masaj._id
                            console.log(`idAngajat=${idAngajat}`)
                            break
                    }
                    return false
                    
                }
            }) 
            $.each(ore, function(k, ora){
                if( ora !== undefined)
                {
                    $ora.append('<option value="'+ ora + '" class="oreDisponibile">'+ ora +'</option>')
                }
            })
        }
    }).fail(function (msg) {
        console.log('FAIL');
    })
}
document.getElementById('rezerva-acum').addEventListener('click', addNewMassageAppointment)

function addNewMassageAppointment(e) {
    e.preventDefault()
    let tip = document.getElementById('tip').value
    let oras = document.getElementById('oras').value
   
    if(tip == '') {
        tip = 'Indian Scalp Massage'
    }

    fetch('http://localhost:1234/api/v1/masaj/massages/dataRecord', {
        method: 'PUT',
        header: {
            "Accept": 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ oras: oras, tip: tip })
    })
    .then(response => {
        if(response.status == 200) {
            addNewMassageEmployeeAppointment()
            updateCityClientsMasaj()
            updateServiceCityClientsMasaj()
            goToConfirmareRezervare()
        } else {
            alert("[Error] Va rugam incercati din nou")
        }
      })
      .catch(err => {
        console.log(err);
      })
}
function addNewMassageEmployeeAppointment() {
    let zi = document.getElementById('data').value
    let interval = document.getElementById('ora').value
   
    if(tip == '') {
        tip = 'Indian Scalp Massage'
    }
    let json = { "id": idAngajat, "zi": zi, "interval": interval }
    console.log(JSON.stringify(json))

    fetch('http://localhost:1234/api/v1/masaj/massageEmployee', {
        method: 'PUT',
        header: {
            "Accept": 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ id: idAngajat, zi: zi, interval: interval })
    })
    .then(response => {
        if(response.status == 200) {
            response.json()
            .then((data) => {
                console.log(data)
            })
        } else {
            alert("[Error] Va rugam incercati din nou")
        }
      })
      .catch(err => {
        console.log(err);
      })
}
function updateServiceCityClientsMasaj() {
    let serviciu = "masaj"
    let oras = document.getElementById('oras').value.toLowerCase()
    
    fetch('http://localhost:1234/api/v1/statistici/serviceCityClient', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({ serviciu: serviciu, oras: oras})
    })
    .then(response => {
        if(response.status != 200) {
            alert("[Error] Va rugam incercati din nou")
        }
      })
      .catch(err => {
        console.log(err);
      })
}
function updateCityClientsMasaj() {
    let oras = document.getElementById('oras').value
    let serviciu = "masaj"

    fetch('http://localhost:1234/api/v1/statistici/cityClient', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({ oras: oras, serviciu: serviciu })
    })
    .then(response => {
        if(response.status != 200) {
            alert("[Error] Va rugam incercati din nou")
        }
      })
      .catch(err => {
        console.log(err);
      })
}

function goToConfirmareRezervare() {
    window.location.href = '../html/masajConfirmareRezervare.html'
}