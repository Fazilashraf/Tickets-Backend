const mongoose = require('mongoose')

const eventBookingSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'events',
        required: true
    },
    user: {
        name: String,
        email: String,
        pNumber: String,
        address: String
    },
    eventName: String,
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

const eBookings = mongoose.model('eBookings', eventBookingSchema)
module.exports = eBookings