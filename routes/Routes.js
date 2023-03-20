// define functions for the different Routes
// this object and the functions could be defined in another file that we import
// each route has a function that takes two params
// data: the info about the request
// callback: the function to call to send the response

let routes = {
    kenny: function(data, res) {
        // this function is called if the path is 'kenny
        console.log(data.method)
        let payload = {
            name: "Kenny"
        }
        let payloadStr = JSON.stringify(payload)
        res.setHeader("Content-Type", "application/json")
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.writeHead(200)
        res.write(payloadStr)
        res.end("\n")
    },
    cartman: function(data, res) {
        // this function is called if the path is 'cartman'
        let payload = {
            name: "Cartman"
        }
        let payloadStr = JSON.stringify(payload)
        res.setHeader("Content-Type", "application/json")
        res.setHeader("Acces-Control-Allow-Origin", "*")
        res.writeHead(200)
        res.write(payloadStr)
        res.end("\n")
    },
    "kenny/is/mysterion": function(data, res) {
        // this function is called if the path is 'kenny/is/mysterion'
        let payload = {
            name: "Mysterion",
            enemy: "The Coon",
            today: +new Date()
        }
        let payloadStr = JSON.stringify(payload)
        res.setHeader("Content-Type", "application/json")
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.writeHead(200)
        res.write(payloadStr)
        res.end("\n")
    },
    notFound: function(data, res) {
        // this one gets if no route matches
        let payload = {
            message: "Fille Not Found",
            code: 404
        }
        let payloadStr = JSON.stringify(payload)
        res.setHeader("Content-Type", "application/json")
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.writeHead(404)
        res.end("\n")
    }
}

module.exports = routes