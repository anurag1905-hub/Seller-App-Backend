const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name:{
        type:String
    },
    code:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('City',citySchema);