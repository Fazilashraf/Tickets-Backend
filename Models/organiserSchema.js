const mongoose = require('mongoose')

// Schema Creation
const organiserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    organiserId: {
        type: String
    }
})

const organisers = mongoose.model('organisers', organiserSchema)
module.exports = organisers