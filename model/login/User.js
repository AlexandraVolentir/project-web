const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.checkLogin = function(username, email, password) {
    return this.where({ username: username, email: email, password: password })
}
userSchema.statics.findLogin = function(username, email) {
    return this.where({ username: username, email: email})
}
module.exports = mongoose.model("user", userSchema)