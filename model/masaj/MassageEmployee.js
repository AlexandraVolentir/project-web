const mongoose = require("mongoose")

const massageEmployeeSchema = new mongoose.Schema({
    nume: {
        type: String,
        required: true
    },
    tipMasaj: {
        type: String,
        required: true
    },
    oras: {
        type: String,
        required: true
    },
    luni: {
        data: {
            type: String,
            required: true
        },
        durata: [
            {
                interval: {
                    type: String
                },
                rezervat: {
                    type: String,
                    default: "Liber"
                }
            }
        ]
    },
    marti: {
        data: String,
        durata: [
            {
                interval: {
                    type: String
                },
                rezervat: {
                    type: String,
                    default: "Liber"
                }
            }
        ]
    },
    miercuri: {
        data: String,
        durata: [
            {
                interval: {
                    type: String
                },
                rezervat: {
                    type: String,
                    default: "Liber"
                }
            }
        ]
    },
    joi: {
        data: String,
        durata: [
            {
                interval: {
                    type: String
                },
                rezervat: {
                    type: String,
                    default: "Liber"
                }
            }
        ]
    },
    vineri: {
        data: String,
        durata: [
            {
                interval: {
                    type: String
                },
                rezervat: {
                    type: String,
                    default: "Liber"
                }
            }
        ]
    }
})

module.exports = mongoose.model("massageEmployee", massageEmployeeSchema)