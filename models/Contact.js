const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    phone:{
        type:String
    },
    email:{
        type:String
    },
    tags:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tags'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Contact',contactSchema);