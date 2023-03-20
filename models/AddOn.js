const mongoose = require('mongoose');

const addOnSchema = new mongoose.Schema({
    addOnid:{
        type:String
    },
    descriptor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    },
    price:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Price'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('AddOn',addOnSchema);