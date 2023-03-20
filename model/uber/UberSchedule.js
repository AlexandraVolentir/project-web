const mongoose = require("mongoose")

const uberScheduleSchema = new mongoose.Schema({
    start: {
        type: String, 
        required: true
    },
    destinatie: {
        type: String, 
        required: true
    },
    distanta: {
        type: Number,
        required: true
    },
    pret: {
        type: Number,
        required: true
    },
    urbana: {
        type: String, 
        required: true
    },
    judet: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("uberSchedule", uberScheduleSchema)