const ServiceCityClient = require('../model/statistici/ServiceCityClient')

module.exports = {
    getAllServiceCityClients: async (res) => {
        try {
            const results = await ServiceCityClient.find({}, {
                __v: 0
            })
            res.setHeader("Content-Type", "application/json")
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.writeHead(200)
            let resultsJSON = JSON.stringify(results)
            res.write(resultsJSON)
            res.end("\n")
        } catch (error) {
            console.log(error.message)
        }
    },
    createNewServiceCityClient: async (res, newServiceCityClient) => {
        try {
            const serviceCityClient = new ServiceCityClient(newServiceCityClient)
            const result = await serviceCityClient.save()
            res.setHeader("Content-Type", "application/json")
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.writeHead(201)
            let createdMessageJSON = JSON.stringify(result)
            res.write(createdMessageJSON)
            res.end("\n")
        } catch (error) {
            console.log(error.message)
        }
    },
    updateServiceCityClients: async (res, serviciu, oras) => {
        try {
            const serviceCityClientUpdated = await ServiceCityClient.findByServiciu(serviciu)
            if(serviceCityClientUpdated.length === 0) {
                let errorMessage = {
                    message: "Service city client does not exists."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(404)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                if(oras == "cluj") {
                    serviceCityClientUpdated[0].cluj = serviceCityClientUpdated[0].cluj + 1
                } else if(oras == "iasi") {
                    serviceCityClientUpdated[0].iasi = serviceCityClientUpdated[0].iasi + 1
                } else if(oras == "bucuresti") {
                    serviceCityClientUpdated[0].bucuresti = serviceCityClientUpdated[0].bucuresti + 1
                }
                await serviceCityClientUpdated[0].save()
                
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200)
                let createdMessageJSON = JSON.stringify(serviceCityClientUpdated[0])
                res.write(createdMessageJSON)
                res.end("\n")
            }    
        } catch (error) {
            console.log(error.message)
        }
    },   
    notFound: async (res) => {
        let payload = {
            message: "Collection Not Found",
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