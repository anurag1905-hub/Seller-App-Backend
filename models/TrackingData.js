const mongoose = require('mongoose');

const trackingDataSchema = new mongoose.Schema({
    tracking_data:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Location'
    },
},{
    timestamps:true
});

module.exports = mongoose.model('TrackingData',trackingDataSchema);