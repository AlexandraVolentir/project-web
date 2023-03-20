const mongoose = require("mongoose")

// folosim colectia asta daca vrem sa facem statistici de genul: distributia vanzarilor in functie de zona geografica
// ex: cum se prezinta vanzarile la uber in fiecare oras
const serviceCityClientSchema = new mongoose.Schema({
    serviciu: {
        type: String, 
        required: true
    }, 
    iasi: {
        type: Number,
        required: true
    },
    cluj: {
        type: Number,
        required: true
    },
    bucuresti: {
        type: Number,
        required: true
    }
})

serviceCityClientSchema.statics.findByServiciu = function(serviciu) {
    return this.where({ serviciu: serviciu })
}

module.exports = mongoose.model("serviceCityClient", serviceCityClientSchema)