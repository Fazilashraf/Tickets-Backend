const organisers = require('../Models/organiserSchema')
const jwt = require('jsonwebtoken')

//Organiser Registration
exports.organiserRegisterAPI = async (req, res) => {
    console.log("Inside Organiser Register API");

    const { username, email, password } = req.body;
    try {
        const existingOrganiser = await organisers.findOne({ email })
        if (existingOrganiser) {
            res.status(402).json({ message: "Organiser already existing" })
        }
        else {
            const newOrg = organisers({
                username: username,
                email: email,
                password: password
            })
            await newOrg.save()
            res.status(200).json("Register Successfull")
        }
    }
    catch (err) {
        res.status(500).json("Error while registering organiser")
    }
}

//Organiser Login
exports.organiserLoginAPI = async (req, res) => {
    console.log("Inside Organiser Login API");

    const { email, password } = req.body;
    try {
        const existingOrganiser = await organisers.findOne({ email, password })
        if (existingOrganiser) {
            const token = jwt.sign({ organiserId: existingOrganiser._id }, process.env.jwtKey)
            console.log(token);
            res.status(200).json({ currentOrganiser: existingOrganiser, token })
        }
        else {
            res.status(404).json("Invalid Credentials")
        }
    }
    catch (err) {
        res.status(500).json("Login Error")
    }
}

exports.getAllOrganisersAPI = async (req, res) => {
    try {
        const response = await organisers.find()
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.deleteOrganiserAPI = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedOrganiser = await organisers.findByIdAndDelete(id);

        if (!deletedOrganiser) {
            return res.status(404).json({ message: "Organiser not found" });
        }

        res.status(200).json({ message: "Organiser deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete Organiser", error: err });
    }
};