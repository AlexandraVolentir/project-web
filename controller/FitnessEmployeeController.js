const FitnessEmployee = require('../model/fitness/FitnessEmployee')

module.exports = {
    getAllFitnessEmployees: async (res) => {
        try {
            const results = await FitnessEmployee.find({}, {
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
    updateFitnessEmployee: async (res, newFitnessEmployee) => {
        try {
            const fitnessEmployee = new FitnessEmployee(newFitnessEmployee)
            const result = await fitnessEmployee.save()
            res.setHeader("Content-Type", "application/json")
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.writeHead(201)
            let createdMessageJSON = JSON.stringify(result)
            res.write(createdMessageJSON)
            res.end("\n")
        } catch (error) {
            console.log(error.message)
        }
    }
}