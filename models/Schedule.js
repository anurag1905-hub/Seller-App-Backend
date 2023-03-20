const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    frequency:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Duration'
    },
    holidays:[{
        items:{
            type:String
        }
    }],
    times:[{
        items:{
            type:String
        }
    }]
},{
    timestamps:true
});

module.exports = mongoose.model('Schedule',scheduleSchema);