const mongoose = require('mongoose');

const gpsSchema = new mongoose.Schema({
    gps:{
        type:String,
        match: [/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/, 'Please fill a valid gps']
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Gps',gpsSchema);