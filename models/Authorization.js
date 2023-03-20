const mongoose = require('mongoose');

const authorizationSchema = new mongoose.Schema({
    type:{
        type:String
    },
    token:{
        type:String
    },
    valid_from:{
        type:String
    },
    valid_to:{
        type:String
    },
    status:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Authorization',authorizationSchema);