const CityClient = require('../model/statistici/CityClient')

module.exports = {
    getAllCityClients: async (res) => {
        try {
            const results = await CityClient.find({}, {
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
    createNewCityClient: async (res, newCityClient) => {
        try {
            const cityClient = new CityClient(newCityClient)
        const result = await cityClient.save()
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
    updateCityClients: async (res, oras, serviciu) => {
        try {
            const cityClientUpdated = await CityClient.findByOras(oras)
            if(!cityClientUpdated) {
                let errorMessage = {
                    message: "Uber Schedule does not exists."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(404)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                if(serviciu == "fitness") {
                    cityClientUpdated[0].fitness = cityClientUpdated[0].fitness + 1
        
                } else if(serviciu == "masaj") {
                    cityClientUpdated[0].masaj = cityClientUpdated[0].masaj + 1
                } else if(serviciu == "uber") {
                    cityClientUpdated[0].uber = cityClientUpdated[0].uber + 1
                }
                await cityClientUpdated[0].save()
                
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200)
                let createdMessageJSON = JSON.stringify(cityClientUpdated[0])
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