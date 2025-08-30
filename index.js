// Load .env File
require('dotenv').config()

// Import Express
const express = require('express')
// Import CORS
const cors = require('cors')
const db = require('./DB/connection')
const router = require('./Routes/router')

//Create an App Using Express
const tkServer = express()

// Use
tkServer.use(cors())
tkServer.use(express.json())
tkServer.use(router)

//Port Creation
const PORT = 3000 || process.env.PORT

//Run
tkServer.listen(PORT, () => {
    console.log("tkServer Running on Port", PORT);
})

tkServer.get('/', (req, res) => {
    res.send("Welcome To TK Server")
})