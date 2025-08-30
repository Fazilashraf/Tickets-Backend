const sBookings = require('../Models/sportBookingsSchema')

exports.addSportBookings = async (req, res) => {
    console.log("Inside Add Sports Booking API");

    const {
        sportId,
        sportName,
        user,
        date,
        time,
        totalAmount,
        paymentStatus
    } = req.body

    try {
        const newBooking = new sBookings({
            sportId,
            sportName,
            user,
            date,
            time,
            totalAmount,
            paymentStatus: paymentStatus || 'Success'
        })
        await newBooking.save()
        res.status(200).json(newBooking)
    }
    catch (err) {
        console.error("Booking Error:", err)
        res.status(500).json({ error: "Failed To Save Bookings", details: err })
    }
}

exports.getSportBookingsAPI = async (req, res) => {
    try {
        const response = await sBookings.find()
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}