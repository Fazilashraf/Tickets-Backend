const mongoose = require('mongoose')

const sportBookingSchema = new mongoose.Schema({
    sportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sports',
        required: true
    },
    user: {
        name: String,
        email: String,
        pNumber: String,
        address: String
    },
    sportName: String,
    date: String,
    time: String,
    totalAmount: Number,
    paymentStatus: {
        type: String,
        enum: ['Success', 'Failed'],
        default: 'Success'
    },
    bookingDate: {
        type: Date,
        default: Date.now
    }
})

const sBookings = mongoose.model('sBookings', sportBookingSchema)
module.exports = sBookings