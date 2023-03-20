const mongoose = require('mongoose');

const rateableSchema = new mongoose.Schema({
    rateable:{
        type:Boolean
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Rateable',rateableSchema);