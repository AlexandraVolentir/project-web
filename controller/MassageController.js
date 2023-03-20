const Massage = require('../model/masaj/Massage')

module.exports = {
    getAllMassages: async (res) => {
        try {
            const results = await Massage.find({}, {
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
    createNewMassage: async (res, newMassage) => {
        try {
            const massage = new Massage(newMassage)
            const result = await massage.save()
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
    getMassageById: async (res, id) => {
        try {
            if( id.length != 24 ){
                let errorMessage = {
                    message: "Massage id is invalid."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(400)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                const massage = await Massage.findById(id)
                if (!massage) {
                    let errorMessage = {
                        message: "Massage does not exists."
                    }
                    res.setHeader("Content-Type", "application/json")
                    res.setHeader("Access-Control-Allow-Origin", "*")
                    res.writeHead(404)
                    let errorMessageJSON = JSON.stringify(errorMessage)
                    res.write(errorMessageJSON)
                    res.end("\n")
                } else {
                    res.setHeader("Content-Type", "application/json")
                    res.setHeader("Access-Control-Allow-Origin", "*")
                    res.writeHead(200)
                    let resultsJSON = JSON.stringify(massage)
                    res.write(resultsJSON)
                    res.end("\n")
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    deleteOneMassage: async (res, id) => {
        try {
            if(id.length != 24){
                let errorMessage = {
                    message: "Massage id is invalid."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(400)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                const result = await Massage.findByIdAndDelete(id)
                if (!result) {
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
                    res.setHeader("Content-Type", "application/json")
                    res.setHeader("Access-Control-Allow-Origin", "*")
                    res.writeHead(200)
                    let resultsJSON = JSON.stringify(result)
                    res.write(resultsJSON)
                    res.end("\n")
                }
            }   
        } catch (error) {
            console.log(error.message)
        }
    },
    getMassageByType: async (res, oras, tip) => {
        try {
            const result = await Massage.findByName(oras, tip)
            if (!result) {
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
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200)
                let resultsJSON = JSON.stringify(result[0])
                res.write(resultsJSON)
                res.end("\n")
            } 
        } catch (error) {
            console.log(error.message)
        }
    },
    updateMassageById: async (res, id) => {
        try {
            const massageUpdated = await Massage.findById(id)
            if (!massageUpdated) {
                let errorMessage = {
                    message: "Massage id does not exists."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(404)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                massageUpdated.clienti = massageUpdated.clienti + 1
                await massageUpdated.save()

                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200)
                let resultsJSON = JSON.stringify(massageUpdated)
                res.write(resultsJSON)
                res.end("\n")
            } 
        } catch (error) {
            console.log(error.message)
        }
    },
    updateMassageByObject: async (res, oras, tip) => {
        try {
            // const obj = new Massage(massage)
            // const massageUpdated = await Massage.findById(obj.id)
            const result = await Massage.findByName(oras, tip)
            const massageUpdated = result[0]
            if (!massageUpdated) {
                let errorMessage = {
                    message: "Massage id does not exists."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(404)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                massageUpdated.clienti = massageUpdated.clienti + 1
                await massageUpdated.save()

                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200)
                let resultsJSON = JSON.stringify(massageUpdated)
                res.write(resultsJSON)
                res.end("\n")
            } 
        } catch (error) {
            console.log(error.message)
        }
    },
}