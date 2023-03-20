const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
    url:{
        type:String
    },
    status:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Tracking',trackingSchema);