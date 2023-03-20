const MembershipController = require('../controller/MembershipController')
const FitnessEmployeeController = require('../controller/FitnessEmployeeController')

let fitnessApiRoutes = {
    membership: function(data, res) {
        if(data.method == 'GET') {
            MembershipController.getAllMembership(res)
        } else if(data.method == 'PUT') {
            if(data.body.length !== 0) {
                const parsedJsonBody = JSON.parse(data.body)
                MembershipController.updateMembershipByTip(res, parsedJsonBody["oras"], parsedJsonBody["tip"])
            }
        }
    },
    "membership/id": function(data, res) {
        if(data.method == 'PUT'){
            MembershipController.updateMembershipById(res, data.id)
        }
    },
    fitnessEmployee: function(data, res) {
        if(data.method == 'GET') {
            FitnessEmployeeController.getAllFitnessEmployees(res)
        } else if(data.method == 'POST') {
            FitnessEmployeeController.updateFitnessEmployee(res, JSON.parse(data.body))
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

module.exports = fitnessApiRoutes