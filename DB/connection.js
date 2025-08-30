// Import Mongoose
const mongoose = require('mongoose')

const connectionString = process.env.connectionString

mongoose.connect(connectionString).then(res=>{
    console.log("TK Server is Connected To DB");
})
.catch(err=>{
    console.log("Error",+err);
})