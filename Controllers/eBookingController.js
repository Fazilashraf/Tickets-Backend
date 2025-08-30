const eBookings = require('../Models/eventBookingSchema')

exports.addEventBookings = async (req, res) => {
    console.log("Inside Add Event Booking API");

    const {
        eventId,
        eventName,
        user,
        date,
        time,
        totalAmount,
        paymentStatus
    } = req.body

    try {
        const newBooking = new eBookings({
            eventId,
            eventName,
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

exports.getEventBookingsAPI = async(req,res)=>{
    try{
        const response = await eBookings.find()
    res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)
    }
}