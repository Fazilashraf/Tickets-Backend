const mongoose = require('mongoose')

const movieBookingsSchema = new mongoose.Schema({
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies',
        required: true
    },
    movieName: String,
    user: {
        name: String,
        email: String,
        pNumber: String,
        address: String 
    },
    date: String,
    time: String,
    seats: [String],
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

const mBookings = mongoose.model('mBookings', movieBookingsSchema)
module.exports = mBookings