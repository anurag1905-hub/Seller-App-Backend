const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    code:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Language',languageSchema);