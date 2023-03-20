const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    url:{
        type:String
    },
    label:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Document',documentSchema);