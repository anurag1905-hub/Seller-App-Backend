const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    location_id:{
        type:String
    },
    descriptor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    },
    gps:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Gps'
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address'
    },
    station_code:{
        type:String
    },
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'City'
    },
    country:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Country'
    },
    circle:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Circle'
    },
    polygon:{
        type:String
    },
    three_d_space:{
        type:String
    },
    time:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Time'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Location',locationSchema);