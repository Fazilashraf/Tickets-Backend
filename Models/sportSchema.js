const mongoose = require('mongoose')

//Schema Creation
const sportSchema = new mongoose.Schema({
    name:{
        type:String
    },
    sptImg:{
        type:String
    },
    date:{
        type:String
    },
    venue:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:String
    },
    bannerImg:{
        type:String
    },
    description:{
        type:String
    },
    votes:{
        type:String
    },
    time:{
        type:String
    },
    duration:{
        type:String
    },
    language:{
        type:String
    },
    ucDate:{
        type:String
    }
})

const sports = mongoose.model('sports',sportSchema)
module.exports=sports