const http = require("http")
const url = require("url")

const uberApiRoutes = require("./routes/UberAPI")
const masajApiRoutes = require("./routes/MasajAPI")
const statisticiApiRoutes = require("./routes/StatisticiAPI")
const fitnessApiRoutes = require("./routes/FitnessAPI")
const loginApiRoutes = require("./routes/LoginAPI")
const feedbackApiRoutes = require("./routes/FeedbackAPI")
const routesHtml = require('./routes/routesHTML')
const mongoDbConnect = require("./model/script")


const PORT = 1234

const server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

    let parsedURL = url.parse(req.url, true)
    let path = parsedURL.pathname
    path = path.replace(/^\/+|\/+$/g, "")
    if(path.startsWith("api/v1/")) {
        path = path.replace("api/v1/", "")
        if(path.startsWith("uber")) {
            path = path.replace("uber/", "")

            let qs = parsedURL.query
            let headers = req.headers
            let method = req.method

            var body = ''
            req.on("data", function(data) {
                console.log("[Server] Receive some data")
                body += data
            })
            req.on("end", function() {
                console.log("[Server] Sending response to api/v1/uber")
                var id = ''
                if(parsedURL.search !== null) {
                    id = parsedURL.search.replace("?id=", "")
                    path = path.concat("/id")
                }

                let route = typeof uberApiRoutes[path] !== "undefined" ? uberApiRoutes[path] : uberApiRoutes["notFound"]
                let data = {
                    path: path,
                    queryString: qs,
                    headers: headers,
                    method: method,
                    body: body,
                    id: id
                }
                route(data, res)
            })
        } else if(path.startsWith("masaj")) {
            path = path.replace("masaj/", "")

            let qs = parsedURL.query
            let headers = req.headers
            let method = req.method

            var body = ''
            req.on("data", function(data) {
                console.log("[Server] Receive some data")
                body += data
            })
            req.on("end", function() {
                console.log("[Server] Sending response to api/v1/masaj")
                var id = ''
                if(parsedURL.search !== null) {
                    id = parsedURL.search.replace("?id=", "")
                    path = path.concat("/id")
                }

                let route = typeof masajApiRoutes[path] !== "undefined" ? masajApiRoutes[path] : masajApiRoutes["notFound"]
                let data = {
                    path: path,
                    queryString: qs,
                    headers: headers,
                    method: method,
                    body: body,
                    id: id
                }
                route(data, res)
            })
        } else if(path.startsWith("statistici")) {
            path = path.replace("statistici/", "")

            let qs = parsedURL.query
            let headers = req.headers
            let method = req.method

            var body = ''
            req.on("data", function(data) {
                console.log("[Server] Receive some data")
                body += data
            })
            req.on("end", function() {
                console.log("[Server] Sending response to api/v1/statistici")
                var id = ''
                if(parsedURL.search !== null) {
                    id = parsedURL.search.replace("?id=", "")
                    path = path.concat("/id")
                }

                let route = typeof statisticiApiRoutes[path] !== "undefined" ? statisticiApiRoutes[path] : statisticiApiRoutes["notFound"]
                let data = {
                    path: path,
                    queryString: qs,
                    headers: headers,
                    method: method,
                    body: body,
                    id: id
                }
                route(data, res)
            })
        } else if(path.startsWith("fitness")) {
            path = path.replace("fitness/", "")

            let qs = parsedURL.query
            let headers = req.headers
            let method = req.method

            var body = ''
            req.on("data", function(data) {
                console.log("[Server] Receive some data")
                body += data
            })
            req.on("end", function() {
                console.log("[Server] Sending response to api/v1/fitness")
                var id = ''
                if(parsedURL.search !== null) {
                    id = parsedURL.search.replace("?id=", "")
                    path = path.concat("/id")
                }
                
                let route = typeof fitnessApiRoutes[path] !== "undefined" ? fitnessApiRoutes[path] : fitnessApiRoutes["notFound"]
                let data = {
                    path: path,
                    queryString: qs,
                    headers: headers,
                    method: method,
                    body: body,
                    id: id
                }
                route(data, res)
            })
        } else if(path.startsWith("login")) {
            path = path.replace("login/", "")

            let qs = parsedURL.query
            let headers = req.headers
            let method = req.method

            var body = ''
            req.on("data", function(data) {
                console.log("[Server] Receive some data")
                body += data
            })
            req.on("end", function() {
                console.log("[Server] Sending response to api/v1/login")
                
                let route = typeof loginApiRoutes[path] !== "undefined" ? loginApiRoutes[path] : loginApiRoutes["notFound"]
                let data = {
                    path: path,
                    queryString: qs,
                    headers: headers,
                    method: method,
                    body: body
                }
                route(data, res)
            })
        } else if(path.startsWith("feedback")) {

            let qs = parsedURL.query
            let headers = req.headers
            let method = req.method

            var body = ''
            req.on("data", function(data) {
                console.log("[Server] Receive some data")
                body += data
            })
            req.on("end", function() {
                console.log("[Server] Sending response to api/v1/feedback")
                
                let route = typeof feedbackApiRoutes[path] !== "undefined" ? feedbackApiRoutes[path] : feedbackApiRoutes["notFound"]
                let data = {
                    path: path,
                    queryString: qs,
                    headers: headers,
                    method: method,
                    body: body
                }
                route(data, res)
            })
        }
    } else {
        let path = parsedURL.pathname
        let qs = parsedURL.query
        let headers = req.headers
        let method = req.method;

        req.on("data", function(data) {
            console.log("[Server] Receive some data")
        })
        req.on("end", function() {
            console.log("[Server] Sending HTML page...")
            let route = typeof routesHtml[path] !== "undefined" ? routesHtml[path] : routesHtml["notFound"]
            let data = {
                path: path,
                queryString: qs,
                headers: headers,
                method: method
            }
            route(res, __dirname)
        })
    }
})

mongoDbConnect.connect()
// mongoDbConnect.create()

server.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})
