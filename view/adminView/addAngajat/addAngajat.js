document.getElementById('register-form').addEventListener('submit', addNewAngajat)
function addNewAngajat(e) {
    e.preventDefault()
    let username = document.getElementById('username-field').value
    let email = document.getElementById('email-field').value
    let password = document.getElementById('password-field').value

    fetch('http://localhost:1234/api/v1/login/secure', {
        method: 'POST',
        header: {
            "Accept": 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ username: username, email: email, password: password })
    })
    .then(response => {
        if(response.status == 201) {
            document.location.href = '../html/confirmareAddAngajat.html';
        } else {
            alert("[Error] Va rugam incercati din nou")
        }
      })
      .catch(err => {
        console.log(err);
      })
}