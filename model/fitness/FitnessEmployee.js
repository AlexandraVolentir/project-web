const mongoose = require("mongoose")

const fitnessEmployeeSchema = new mongoose.Schema({
    oras: {
        type: String,
        required: true
    },
    nume: {
        type: String,
        required: true
    },
    numeClient: {
        type: String,
        required: true
    }, 
    tip: {
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


module.exports = mongoose.model("fitnessEmployee", fitnessEmployeeSchema)