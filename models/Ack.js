const mongoose = require('mongoose');

const ackSchema = new mongoose.Schema({
    status:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

module.exports = mongoose.model('Ack',ackSchema);