document.getElementById('login-form').addEventListener('submit', logIn)
function logIn(e) {
    e.preventDefault()
    let username = document.getElementById('username-field').value
    let email = document.getElementById('email-field').value
    let password = document.getElementById('password-field').value

    fetch('http://localhost:1234/api/v1/login/verify', {
        method: 'POST',
        header: {
            "Accept": 'application/json, text/plain, /',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ username: username, email: email, password: password })
    })
    .then(response => {
        if(response.status == 200) {
            if(email.includes("masaj")) {
                document.location.href = '../angajat-masaj/angajat-masaj.html'
            } else if(email.includes("uber")) {
                document.location.href = '../angajat-uber/angajat-uber.html'
            } else if(email.includes("fitness")) {
                document.location.href = '../angajat-fitness/angajat-fitness.html'
            } else if(email.includes("admin")) {
                document.location.href = '../adminView/adminIndex.html'
            }
        } 
        else {
            alert("[Error] Datele introduse nu sunt corecte sau utilizatorul nu exista!")
        }
      })
      .catch(err => {
        console.log(err);
      })
}