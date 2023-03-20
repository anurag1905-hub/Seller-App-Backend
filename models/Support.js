const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
    type:{
        type:String
    },
    ref_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    },
    channels:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tags'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Support',supportSchema);