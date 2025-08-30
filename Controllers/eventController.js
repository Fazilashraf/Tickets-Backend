const events = require('../Models/eventSchema')

exports.addEventAPI = async (req, res) => {
    console.log("Inside Add Event API");

    const { name, date, description, evtImg, venue, category, price, bannerImg, evtPics, votes, ucDate, time, language, duration } = req.body

    try {
        const event = await events.findOne({ name })
        if (event) {
            res.status(401).json("Event Already Exist")
        }
        else {
            const newEvent = new events({ name, date, description, evtImg, venue, category, price, bannerImg, evtPics, votes, ucDate, time, language, duration })
            await newEvent.save()
            res.status(200).json(newEvent)
        }
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getEventsAPI = async (req, res) => {
    try {
        const response = await events.find()
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getAEventAPI = async (req, res) => {
    const { id } = req.params
    try {
        const response = await events.findById(id)
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getHomeEventsAPI = async (req, res) => {
    try {
        const response = await events.find().limit(3)
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.editEventAPI = async (req, res) => {
    const { id } = req.params

    try {
        const updated = await events.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Event not found" });
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.DeleteEventAPI = async (req, res) => {
    const { id } = req.params

    try {
        const deletedEvent = await events.findByIdAndDelete(id)

        if (!deletedEvent) {
            res.status(404).json({ message: 'Event not Found' })
        }
        else {
            res.status(200).json({ message: 'Event Deleted Successfully' })
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error Deleting Event   ', error: err })
    }
}