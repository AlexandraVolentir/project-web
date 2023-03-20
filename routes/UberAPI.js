const UberController = require('../controller/UberController')

let uberApiRoutes = {
    schedule: function(data, res) {
        // this function is called if the path is 'kenny
        if(data.method == 'GET')
        {
            UberController.getAllUberSchedules(res)
        } else if(data.method == 'POST') {
            // console.log(data.body)
            UberController.createNewUberSchedule(res, JSON.parse(data.body))
        }
    },
    "schedule/id": function(data, res) {
        if(data.method == 'GET') {
            UberController.getUberScheduleById(res, data.id)
        } else if(data.method == 'DELETE') {
            UberController.deleteOneUberSchedule(res, data.id)
        }
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
        res.write(payloadStr)
        res.end("\n")
    }
}

module.exports = uberApiRoutes

// const UberController = require('../controller/UberController')
// const UberSchedule = require('../model/uber/UberSchedule')
// const verifyJWT = require('./verifyJWT')
// let uberApiRoutes = {
//     schedule: async function(data, res) {
//     console.log(data);
//         // if(data.method == 'GET')
//         // {
//         //     UberController.getAllUberSchedules(res)
//         // }
//         if(data.method == 'GET')
//         {
//             let gasit = true;
//     let user = await verifyJWT.authorize(data,res).catch(e=>{
//         res.statusCode = 302;
//         gasit = false;
//         return res.end('http://localhost:1234/api/v1/login/secure');
//     });                                                 
//     if(gasit){
//         UberController.getAllUberSchedules(res)
//     }
//         }
//          else if(data.method == 'POST') {
//             // console.log(data.body)
//             UberController.createNewUberSchedule(res, JSON.parse(data.body))
//         }
//     },
//     "schedule/id": function(data, res) {
//         if(data.method == 'GET') {
//             UberController.getUberScheduleById(res, data.id)
//         } else if(data.method == 'DELETE') {
//             UberController.deleteOneUberSchedule(res, data.id)
//         }
//     },
//     notFound: function(data, res) {
//         // this one gets if no route matches
//         let payload = {
//             message: "Fille Not Found",
//             code: 404
//         }
//         let payloadStr = JSON.stringify(payload)
//         res.setHeader("Content-Type", "application/json")
//         res.setHeader("Access-Control-Allow-Origin", "*")
//         res.writeHead(404)
//         res.write(payloadStr)
//         res.end("\n")
//     }
// }

// module.exports = uberApiRoutes