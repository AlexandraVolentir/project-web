const mongoose = require("mongoose")

const membershipSchema = new mongoose.Schema({
    oras: {
        type: String,
        required: true
    },
    tip: {
        type: String,
        required: true
    },
    pret: {
        type: Number,
        required: true,
    },
    descriere: {
        type: String,
        required: true
    },
    clienti: {
        type: Number,
        default: 0
    }
})

membershipSchema.statics.findByTip = function(oras, tip) {
    return this.where({ oras: oras, tip: tip })
}

module.exports = mongoose.model("membership", membershipSchema)