document.querySelector('#uber').addEventListener('click', goToUber)
document.querySelector('#masaj').addEventListener('click', goToMasaj)
document.querySelector('#fitness').addEventListener('click', goToFitness)
document.querySelector('#login').addEventListener('click', goToLogin)
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
function goToLogin() {
    window.location.href = '../../login/login.html'
}
function goToHome() {
    window.location.href = '../../index.html'
}

document.getElementById('uber-form').addEventListener('submit', addNewUberSchedule)
function addNewUberSchedule(e) {
    e.preventDefault()
    let start = document.getElementById('start').value
    let destinatie = document.getElementById('destinatie').value
    let judet = document.getElementById('city').value
    let distanta = generateDistance()
    let pret = computePrice(distanta)
    let urbana = checkIfUrbana(distanta)

    fetch('http://localhost:1234/api/v1/uber/schedule', {
        method: 'POST',
        header: {
            "Accept": 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ start: start, destinatie: destinatie, distanta: distanta, pret: pret, urbana: urbana, judet: judet })
    })
    .then(response => {
        if(response.status == 201) {
            updateCityClientsUber()
            updateServiceCityClientsUber()
            document.location.href = '../html/confirmaCursaUber.html';
        } else {
            alert("[Error] Va rugam incercati din nou")
        }
      })
      .catch(err => {
        console.log(err);
      })
}
function updateServiceCityClientsUber() {
    let serviciu = "uber"
    let judet = document.getElementById('city').value.toLowerCase()
    
    fetch('http://localhost:1234/api/v1/statistici/serviceCityClient', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({ serviciu: serviciu, oras: judet})
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
function updateCityClientsUber() {
    let judet = document.getElementById('city').value
    let serviciu = "uber"

    fetch('http://localhost:1234/api/v1/statistici/cityClient', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({ oras: judet, serviciu: serviciu })
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
function checkIfUrbana(distanta) {
    if( distanta > 35) {
        return "NU"
    } else {
        return "DA"
    }
}
function computePrice(distanta) {
    const pret = 2.5
    return pret * distanta
}
function generateDistance() {
    const min = 2
    const max = 50

    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor( rand * difference);

    rand = rand + min;

    return rand;
}