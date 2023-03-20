const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
    domain:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Domain',domainSchema);