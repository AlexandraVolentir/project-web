const MassageController = require('../controller/MassageController')
const MassageEmployeeController = require('../controller/MassageEmployeeController')

let masajApiRoutes = {
    massages: function(data, res) {
        if(data.method == 'GET')
        {
            MassageController.getAllMassages(res)
        } else if(data.method == 'POST') {
            // console.log(data.body)
            MassageController.createNewMassage(res, JSON.parse(data.body))
        }
    },
    "massages/id": function(data, res) {
        if(data.method == 'GET') {
            MassageController.getMassageById(res, data.id)
        } else if(data.method == 'DELETE') {
            MassageController.deleteOneMassage(res, data.id)
        } else if(data.method == 'PUT') {
            MassageController.updateMassageById(res, data.id)
        }
    },
    "massages/dataRecord": function(data, res) {
        if(data.method == 'GET') {
            const parsedJsonBody = JSON.parse(data.body)
            MassageController.getMassageByType(res, parsedJsonBody["oras"], parsedJsonBody["tip"])
        } else if(data.method == 'PUT') {
            const parsedJsonBody = JSON.parse(data.body)
            MassageController.updateMassageByObject(res, parsedJsonBody["oras"], parsedJsonBody["tip"])
        }
    },
    massageEmployee: function(data, res) {
        if(data.method == 'GET') {
            MassageEmployeeController.getAllMassageEmployees(res)
        } else if(data.method == 'PUT') {
            const parsedJsonBody = JSON.parse(data.body)
            MassageEmployeeController.updateMassageEmployee(res, parsedJsonBody["id"], parsedJsonBody["zi"], parsedJsonBody["interval"])
        } else if(data.method == 'POST') {
            MassageEmployeeController.createNewMassageEmployee(res, JSON.parse(data.body))
        }
    },
    notFound: function(data, res) {
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

module.exports = masajApiRoutes