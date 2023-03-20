const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    tag:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Tag',tagSchema);