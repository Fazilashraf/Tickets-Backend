const testimonies = require('../Models/testimonySchema')

exports.addTestimony = async (req, res) => {
    console.log("Inside Add Testimony API");

    const { name, email, subject, message } = req.body


    try {
        const newTestimony = new testimonies({
            name, email, subject, message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getAllTestimoniesAPI = async (req, res) => {
    try {
        const response = await testimonies.find()
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}