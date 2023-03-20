const mongoose = require('mongoose');

const circleSchema = new mongoose.Schema({
    gps:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Gps',
        required:true
    },
    radius:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Scalar',
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Circle',circleSchema);