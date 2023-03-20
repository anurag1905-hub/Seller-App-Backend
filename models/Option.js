const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    option_id:{
        type:String
    },
    descriptor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Option',optionSchema);