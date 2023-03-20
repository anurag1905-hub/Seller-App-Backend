const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
    name:{
        type:String,
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Name',nameSchema);