const CityClientController = require('../controller/CityClientController')
const ServiceCityClient = require("../controller/ServiceClientCityController")

let statisticiApiRoutes = {
    cityClient: function(data, res) {
        if(data.method == 'GET')
        {
            CityClientController.getAllCityClients(res)
        } else if(data.method == 'POST') {
            // console.log(data.body)
            CityClientController.createNewCityClient(res, JSON.parse(data.body))
        } else if(data.method == 'PUT') {
            if(data.body.length != 0) {
                const parsedJsonBody = JSON.parse(data.body)
                CityClientController.updateCityClients(res, parsedJsonBody["oras"], parsedJsonBody["serviciu"])
            } else {
                CityClientController.notFound(res)
            }
        }
    },
    serviceCityClient: function(data, res) {
        if(data.method == 'GET')
        {
            ServiceCityClient.getAllServiceCityClients(res)
        } else if(data.method == 'POST') {
            // console.log(data.body)
            ServiceCityClient.createNewServiceCityClient(res, JSON.parse(data.body))
        } else if(data.method == 'PUT') {
            if(data.body.length != 0) {
                const parsedJsonBody = JSON.parse(data.body)
                ServiceCityClient.updateServiceCityClients(res, parsedJsonBody["serviciu"], parsedJsonBody["oras"])
            } else {
                ServiceCityClient.notFound(res)
            }
        }
    },
    notFound: function(data, res) {
        // // this one gets if no route matches
        // let payload = {
        //     message: "Fille Not Found",
        //     code: 404
        // }
        // let payloadStr = JSON.stringify(payload)
        // res.setHeader("Content-Type", "application/json")
        // res.setHeader("Access-Control-Allow-Origin", "*")
        // res.writeHead(404)
        // res.write(payloadStr)
        // res.end("\n")
        CityClientController.notFound(res)
    }
}

module.exports = statisticiApiRoutes