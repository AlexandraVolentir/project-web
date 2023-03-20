const User = require('../model/login/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = {
    createUserEmployee: async (res, newUser) => {
        try {
            const user = new User(newUser)
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            const result = await user.save()
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
    verifyLogin: async (res, user) => {
        try {

            const verifyUserPassword = await User.findLogin(user.username, user.email);
            if (verifyUserPassword.length == 0){
                let errorMessage = {
                    message: "Credentiale gresite"
                }
                    res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(404)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            }
           else
           if(verifyUserPassword.length!=0)
           {const validPassword = await bcrypt.compare(user.password, verifyUserPassword[0].password);
                    if(!validPassword)
                    {let errorMessage = {
                        message: "Credentiale gresite"
                    }
                    res.setHeader("Content-Type", "application/json")
                    res.setHeader("Access-Control-Allow-Origin", "*")
                    res.writeHead(404)
                    let errorMessageJSON = JSON.stringify(errorMessage)
                    res.write(errorMessageJSON)
                    res.end("\n")}
                    else {
                        // const token = jwt.sign({_id: verifyUserPassword[0]._id}, process.env.TOKEN_SECRET);
                        // // res.setHeader('auth-token', token);
                        
                        // // res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Max-Age=300`); 
                        res.setHeader("Content-Type", "application/json")
                        res.setHeader("Access-Control-Allow-Origin", "*")
                        res.writeHead(200)
                        let resultsJSON = JSON.stringify(verifyUserPassword[0])
                        // let resultsJSON = JSON.stringify(token)
                        res.write(resultsJSON)
                        res.end("\n")
                        // res.end(token)
                    }

           }

        } catch (error) {
            console.log(error.message)
        }
    },
    deleteUser: async (res, user) => {
        try {
            const foundedUser = await User.checkLogin(user.username, user.email, user.password)
            if (!foundedUser) {
                let errorMessage = {
                message: "User does not exists."
                }
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(404)
                let errorMessageJSON = JSON.stringify(errorMessage)
                res.write(errorMessageJSON)
                res.end("\n")
            } else {
                const result = await User.findByIdAndDelete(foundedUser[0]._id)
                res.setHeader("Content-Type", "application/json")
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200)
                let resultsJSON = JSON.stringify(result)
                res.write(resultsJSON)
                res.end("\n")
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    getAllUsers: async (res) => {
        try {
            const results = await User.find({}, {
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
}