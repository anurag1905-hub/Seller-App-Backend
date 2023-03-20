const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    category:{
        type:String
    },
    capacity:{
        type:Number
    },
    make:{
        type:String
    },
    model:{
        type:String
    },
    size:{
        type:String
    },
    variant:{
        type:String
    },
    color:{
        type:String
    },
    energy_type:{
        type:String
    },
    registration:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Vehicle',vehicleSchema);