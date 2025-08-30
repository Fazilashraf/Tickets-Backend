const mBookings = require('../Models/movieBookingsSchema');

exports.addMovieBookings = async (req, res) => {
    console.log("Inside Add Movie Bookings API");

    const {
        movieId,
        movieName,
        user,
        date,
        time,
        seats,
        totalAmount,
        paymentStatus
    } = req.body;

    try {
        const newBooking = new mBookings({
            movieId,
            movieName,
            user,
            date,
            time,
            seats,
            totalAmount,
            paymentStatus: paymentStatus || 'Success'  // default to success if not given
        });

        await newBooking.save();
        res.status(200).json(newBooking);
    } catch (err) {
        console.error("Booking error:", err);
        res.status(500).json({ error: "Failed to save booking", details: err });
    }
};


exports.getMovieBookingsAPI = async(req,res)=>{
    try{
        const response = await mBookings.find()
    res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)
    }
}