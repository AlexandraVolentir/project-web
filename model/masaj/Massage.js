const mongoose = require("mongoose")

const massageSchema = new mongoose.Schema({
    oras: {
        type: String,
        required: true
    },
    tip: {
        type: String,
        required: true
    },
    durata: {
        type: String,
        required: true
    },
    pret: {
        type: Number,
        required: true
    },
    clienti: {
        type: Number,
        default: 0
    }
})

massageSchema.statics.findByName = function(oras, name) {
    return this.where({ oras: oras, tip: name })
}

module.exports = mongoose.model("massage", massageSchema)