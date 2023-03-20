const Membership = require('../model/fitness/Membership')

module.exports = {
    getAllMembership: async (res) => {
        try {
            const results = await Membership.find({}, {
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
            const membership = new Membership(newMembership)
            const result = await membership.save()
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
    updateMembershipByTip: async (res, oras, tip) => {
        try {
            const membershipUpdated = await Membership.findByTip(oras, tip)
            if(membershipUpdated.length === 0) {
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
                membershipUpdated[0].clienti = membershipUpdated[0].clienti + 1
                await membershipUpdated[0].save()
                
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200)
                let createdMessageJSON = JSON.stringify(membershipUpdated[0])
                res.write(createdMessageJSON)
                res.end("\n")
            }    
        } catch (error) {
            console.log(error.message)
        }
    },   
    updateMembershipById: async (res, id) => {
        try {
            const membershipUpdated = await Membership.findById(id)
            if(!membershipUpdated) {
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
                membershipUpdated.clienti = membershipUpdated.clienti + 1
                await membershipUpdated.save()
                
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200)
                let createdMessageJSON = JSON.stringify(membershipUpdated)
                res.write(createdMessageJSON)
                res.end("\n")
            }    
        } catch (error) {
            console.log(error.message)
        }
    },
}