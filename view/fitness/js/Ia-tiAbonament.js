document.querySelector('#uber').addEventListener('click', goToUber)
document.querySelector('#masaj').addEventListener('click', goToMasaj)
document.querySelector('#fitness').addEventListener('click', goToFitness)
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
function goToHome() {
    window.location.href = '../../index.html'
}
function getAbonamente() {
    $( ".abonamente" ).remove()
    $tip = $('#tip')
    $tip.append('<option value="Fitness-Full" class="abonamente">Fitness-Full</option>')
    $tip.append('<option value="Fitness Day Time" class="abonamente">Fitness Day Time</option>')
    $tip.append('<option value="Fitness 8 sedinte" class="abonamente">Fitness 8 sedinte</option>')
    $tip.append('<option value="Fitness 12 sedinte" class="abonamente">Fitness 12 sedinte</option>')
    $tip.append('<option value="Fitness 6 luni" class="abonamente">Fitness 6 luni</option>')
    $tip.append('<option value="Fitness Fidelizare(FULL)" class="abonamente">Fitness Fidelizare(FULL)</option>')
    $tip.append('<option value="Fitness 3 luni" class="abonamente">Fitness 3 luni</option>')
    $tip.append('<option value="Fitness 1 an" class="abonamente">Fitness 1 an</option>')
}
function getAntrenori() {
    $( ".antrenori" ).remove()
    let oras = document.getElementById('oras').value
    let $antrenor = $("#antrenor")
   
    fetch('http://localhost:1234/api/v1/fitness/fitnessEmployee', {
        method: 'GET'
    })
    .then(response => {
        if(response.status == 200) {
            response.json()
            .then(function(abonamente) {
                let angajati = []
                let contor = 0
               $.each(abonamente, function(i, abonament) {
                    if(abonament.oras == oras) {
                        if(!angajati.includes(abonament.nume)) {
                            angajati[contor++] = abonament.nume
                        }
                    }
                }) 
                $.each(angajati, function(i, angajat) {
                    $antrenor.append('<option value="'+ angajat + '" class="antrenori">'+ angajat +'</option>')
                }) 
            })
        } else {
            alert("[Error] Va rugam incercati din nou")
        }
    })
    .catch(err => {
        console.log(err);
    })
}


document.getElementById('fitness-form-submit').addEventListener('click', addMembership)
function addMembership(e) {
    e.preventDefault()
    
    let oras = document.getElementById('oras').value
    let nume = document.getElementById('antrenor').value
    let numeClient = document.getElementById('numeClient').value
    let tip = document.getElementById('tip').value
    
   
    if(tip == '' || oras == '' || numeClient == '') {
        alert('[Atentie] Toate campurile sunt obligatorii.')
    } else {
        fetch('http://localhost:1234/api/v1/fitness/fitnessEmployee', {
        method: 'POST',
        header: {
            "Accept": 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ oras: oras, nume: nume, numeClient: numeClient, tip: tip })
    })
    .then(response => {
        if(response.status == 201) {
            updateMemberships()
            updateCityClientsMasaj()
            updateServiceCityClientsMasaj()
            document.location.href = '../html/confirmare.html'
        } else {
            alert("[Error] Va rugam incercati din nou")
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
}

function updateMemberships() {
    let oras = document.getElementById('oras').value
    let tip = document.getElementById('tip').value

    fetch('http://localhost:1234/api/v1/fitness/membership', {
        method: 'PUT',
        header: {
            "Accept": 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ oras: oras, tip: tip })
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
function updateServiceCityClientsMasaj() {
    let serviciu = "fitness"
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
    let serviciu = "fitness"

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