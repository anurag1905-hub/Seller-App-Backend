const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
    label:{
        type:String
    },
    timestamp:{
        type:String
    },
    duration:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Duration'
    },
    range:{
        start:{
            type:String
        },
        end:{
            type:String
        }
    },
    days:{
        type:String
    },
    schedule:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Schedule'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Time',timeSchema);