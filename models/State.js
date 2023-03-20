const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    descriptor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    },
    updated_by:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('State',stateSchema);