const MassageEmployee = require('../model/masaj/MassageEmployee')

module.exports = {
    getAllMassageEmployees: async (res) => {
        try {
            const results = await MassageEmployee.find({}, {
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
    createNewMassageEmployee: async (res, newMassageEmployee) => {
        try {
            const massageEmployee = new ServiceCityClient(newMassageEmployee)
            const result = await massageEmployee.save()
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
    updateMassageEmployee: async (res, id, zi, interval) => {
        try {
            const massageEmployeeUpdated = await MassageEmployee.findById(id)
            if(!massageEmployeeUpdated) {
                let errorMessage = {
                    message: "Massage employee does not exists."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(404)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                switch(zi) {
                    case massageEmployeeUpdated.luni.data:
                        const length1 = massageEmployeeUpdated.luni.durata.length
                        for(let i = 0; i < length1; i++) {
                            if(massageEmployeeUpdated.luni.durata[i].interval == interval){
                                massageEmployeeUpdated.luni.durata[i].rezervat = "Rezervat"
                                await massageEmployeeUpdated.save()
                            }
                        }
                        break
                    case massageEmployeeUpdated.marti.data:
                        const length2 = massageEmployeeUpdated.marti.durata.length
                        for(let i = 0; i < length2; i++) {
                            if(massageEmployeeUpdated.marti.durata[i].interval == interval){
                                massageEmployeeUpdated.marti.durata[i].rezervat = "Rezervat"
                                await massageEmployeeUpdated.save()
                            }
                        }
                        break
                    case massageEmployeeUpdated.miercuri.data:
                        const length3 = massageEmployeeUpdated.miercuri.durata.length
                        for(let i = 0; i < length3; i++) {
                            if(massageEmployeeUpdated.miercuri.durata[i].interval == interval){
                                massageEmployeeUpdated.miercuri.durata[i].rezervat = "Rezervat"
                                await massageEmployeeUpdated.save()
                            }
                        }
                        break
                    case massageEmployeeUpdated.joi.data:
                        const length4 = massageEmployeeUpdated.joi.durata.length
                        for(let i = 0; i < length4; i++) {
                            if(massageEmployeeUpdated.joi.durata[i].interval == interval){
                                massageEmployeeUpdated.joi.durata[i].rezervat = "Rezervat"
                                await massageEmployeeUpdated.save()
                            }
                        }
                        break
                    case massageEmployeeUpdated.vineri.data:
                        const length5 = massageEmployeeUpdated.vineri.durata.length
                        for(let i = 0; i < length5; i++) {
                            if(massageEmployeeUpdated.vineri.durata[i].interval == interval){
                                massageEmployeeUpdated.vineri.durata[i].rezervat = "Rezervat"
                                await massageEmployeeUpdated.save()
                            }
                        }
                        break
                }
                
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200)
                let createdMessageJSON = JSON.stringify(massageEmployeeUpdated)
                res.write(createdMessageJSON)
                res.end("\n")
            }    
        } catch (error) {
            console.log(error.message)
        }
    },   
}