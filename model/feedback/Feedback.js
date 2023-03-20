const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    oras: {
        type: String,
        required: true
    },
    serviciu: {
        type: String,
        required: true
    },
    calificativ: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    }, 
    data: {
        type: String,
        immutable: true,
        default: () =>  {
            const timeElapsed = Date.now()
            const today = new Date(timeElapsed);
            return today.toLocaleDateString()
        }
    }
})


module.exports = mongoose.model("feedback", feedbackSchema)