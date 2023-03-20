const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    subscriber_id:{
        type:String
    },
    type:{
        type:String
    },
    cb_url:{
        type:String
    },
    domain:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Domain'
    },
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'City'
    },
    country:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Country'
    },
    signing_public_key:{
        type:String
    },
    encrypting_public_key:{
        type:String
    },
    status:{
        type:String
    },
    created:{
        type:String
    },
    updated:{
        type:String
    },
    expires:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Subscriber',subscriberSchema);