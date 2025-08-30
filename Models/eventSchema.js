const mongoose = require('mongoose')

//Schema Creation
const eventSchema = new mongoose.Schema({
    name:{
        type:String
    },
    evtImg:{
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
    evtPics:{
        type:[String]
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

const events = mongoose.model('events',eventSchema)
module.exports=events