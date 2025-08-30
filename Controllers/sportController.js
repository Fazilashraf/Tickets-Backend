const sports = require('../Models/sportSchema')

exports.addSportAPI = async (req, res) => {
    console.log("Inside Add Sports API");

    const { name, date, description, sptImg, venue, category, price, bannerImg, votes, time, language, duration, ucDate } = req.body

    try {
        const sport = await sports.findOne({ name })
        if (sport) {
            res.status(401).json("Sport Already Exist")
        }
        else {
            const newSport = new sports({ name, date, description, sptImg, venue, category, price, bannerImg, votes, time, language, duration, ucDate })
            await newSport.save()
            res.status(200).json(newSport)
        }
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getSportsAPI = async (req, res) => {
    try {
        const response = await sports.find()
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getASportAPI = async (req, res) => {
    const { id } = req.params
    try {
        const response = await sports.findById(id)
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getHomeSportsAPI = async (req, res) => {
    try {
        const response = await sports.find().limit(3)
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.editSportAPI = async (req, res) => {
    const { id } = req.params

    try {
        const updated = await sports.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Sport not found" });
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.DeleteSportAPI = async (req, res) => {
    const { id } = req.params

    try {
        const deletedSport = await sports.findByIdAndDelete(id)

        if (!deletedSport) {
            res.status(404).json({ message: 'Sport not Found' })
        }
        else {
            res.status(200).json({ message: 'Sport Deleted Successfully' })
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Sport Deleting Event   ', error: err })
    }
}