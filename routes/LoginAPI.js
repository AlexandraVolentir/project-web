const UserController = require('../controller/UserController')

let loginApiRoutes = {
    secure: function(data, res) {
        if(data.method == 'GET'){
            UserController.getAllUsers(res)
        } else if(data.method == 'POST') {
            UserController.createUserEmployee(res, JSON.parse(data.body))
        } else if(data.method == 'DELETE') {
            if(data.body.length != 0) {
                UserController.deleteUser(res, JSON.parse(data.body))
            }
        }
    },
    verify: function(data, res) {
        if(data.method == 'POST'){
            UserController.verifyLogin(res, JSON.parse(data.body))
        }
    },
    notFound: function(data, res) {
        // this one gets if no route matches
        let payload = {
            message: "Fille Not Found",
            code: 404
        }
        let payloadStr = JSON.stringify(payload)
        res.setHeader("Content-Type", "application/json")
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.writeHead(404)
        res.write(payloadStr)
        res.end("\n")
    }
}

module.exports = loginApiRoutes