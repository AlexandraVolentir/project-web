document.querySelector('#uber').addEventListener('click', goToUber)
document.querySelector('#masaj').addEventListener('click', goToMasaj)
document.querySelector('#fitness').addEventListener('click', goToFitness)
document.querySelector('#login').addEventListener('click', goToLogin)
document.querySelector('#home').addEventListener('click', goToHome)
document.getElementById('feedback-form').addEventListener('submit', addNewFeedback)
function goToUber() {
    window.location.href = 'uber/html/uberHomePage.html'
}
function goToMasaj() {
    window.location.href = 'masaj/html/masajHomepage.html'
}
function goToFitness() {
    window.location.href = 'fitness/html/fitness.html'
}
function goToLogin() {
    window.location.href = 'login/login.html'
}
function goToHome() {
    window.location.href = 'index.html'
}
function addNewFeedback(e) {
    e.preventDefault()
    let oras = document.getElementById('oras').value
    let serviciu = document.getElementById('serviciu').value
    let calificativ = document.getElementById('calificativ').value
    let descriere = document.getElementById('descriere').value

    fetch('http://localhost:1234/api/v1/feedback', {
        method: 'POST',
        header: {
            "Accept": 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ oras: oras,serviciu: serviciu, calificativ: calificativ, descriere: descriere })
    })
    .then(response => {
        if(response.status == 201) {
            // document.location.href = 'index.html';
        } else {
            alert("[Error] Va rugam incercati din nou")
        }
      })
      .catch(err => {
        console.log(err);
      })
}