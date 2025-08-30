const mongoose = require('mongoose')

// Schema Creation
const userSchema = new mongoose.Schema({
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
    userId: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'organiser', 'admin'],
        default: 'user'
    }
})

const users = mongoose.model('users', userSchema)
module.exports = users