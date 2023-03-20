const UberSchedule = require('../model/uber/UberSchedule')

module.exports = {
    getAllUberSchedules: async (res) => {
        try {
            const results = await UberSchedule.find({}, {
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

    createNewUberSchedule: async (res, newUberSchedule) => {
        try {
            const uberSchedule = new UberSchedule(newUberSchedule)
            const result = await uberSchedule.save()
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
    getUberScheduleById: async (res, id) => {
        try {
            if( id.length != 24 ){
                let errorMessage = {
                    message: "Uber Schedule id is invalid."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(400)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                const uberSchedule = await UberSchedule.findById(id)
                if (!uberSchedule) {
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
                    let resultsJSON = JSON.stringify(uberSchedule)
                    res.write(resultsJSON)
                    res.end("\n")
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    deleteOneUberSchedule: async (res, id) => {
        try {
            if(id.length != 24){
                let errorMessage = {
                    message: "Uber Schedule id is invalid."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(400)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                const result = await UberSchedule.findByIdAndDelete(id)
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
    }
}