const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    door:{
        type:String
    },
    name:{
        type:String
    },
    building:{
        type:String
    },
    street:{
        type:String
    },
    locality:{
        type:String
    },
    ward:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    area_code:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Address',addressSchema);