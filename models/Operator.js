const mongoose = require('mongoose');

const operatorSchema = new mongoose.Schema({
    person:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Person'
    },
    label:{
        type:String
    },
    value:{
        type:String
    },
    unit:{
        type:String
    },
},{
    timestamps:true
});

module.exports = mongoose.model('Operator',operatorSchema);