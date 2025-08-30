const mongoose = require('mongoose')

const testimonySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    }
}, { timestamps: true })

const testimonies = mongoose.model('testimonies', testimonySchema)
module.exports = testimonies