const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//Register Logic
exports.registerAPI = async (req, res) => {
    console.log("Inside The User Register API");

    const { username, email, password, role } = req.body

    const existingUser = await users.findOne({ email })
    if (existingUser) {
        res.status(402).json({ message: "User Already Existing" })
    }
    else {

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = users({
            username: username,
            email: email,
            password: hashedPassword,
            role: role || 'user'
        })
        await newUser.save()
        res.status(200).json("Register Successfull")
    }
}

// Login Logic
exports.loginAPI = async (req, res) => {
    console.log("Inside User Login API");

    const { email, password } = req.body

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

            if (!isPasswordMatch) {
                return res.status(401).json("Incorrect Email or Password");
            }

            const token = jwt.sign({ userId: existingUser._id }, process.env.jwtKey)
            console.log(token);
            res.status(200).json({ currentUser: existingUser, token, role: existingUser.role })
        }
        else {
            res.status(404).json("Incorrect Email or Password")
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.getAllUsersAPI = async (req, res) => {
    try {
        const response = await users.find()
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.deleteUserAPI = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await users.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete user", error: err });
    }
};
