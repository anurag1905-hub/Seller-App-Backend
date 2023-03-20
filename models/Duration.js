const mongoose = require('mongoose');

const durationSchema = new mongoose.Schema({
    duration:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Duration',durationSchema);