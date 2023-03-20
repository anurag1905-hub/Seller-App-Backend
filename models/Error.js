const mongoose = require('mongoose');

const errorSchema = new mongoose.Schema({
    type:{
        type:String
    },
    code:{
        type:String
    },
    path:{
        type:String
    },
    message:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Error',errorSchema);