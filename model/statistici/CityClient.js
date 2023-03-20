const mongoose = require("mongoose")

//aici o sa avem toti clientii fiecarui serviciu din fiecare oras
// daca vrem sa facem statistici in functie de oras, de exemplu cel mai popular serviciu din iasi
const cityClientSchema = new mongoose.Schema({
    oras: {
        type: String, 
        required: true
    },
    fitness: {
        type: Number,
        required: true
    },
    masaj: {
        type: Number,
        required: true
    },
    uber: {
        type: Number,
        required: true
    }
})

cityClientSchema.statics.findByOras = function(oras) {
    return this.where({ oras: oras })
}

module.exports = mongoose.model("cityClient", cityClientSchema)