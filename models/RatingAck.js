const mongoose = require('mongoose');

const ratingackSchema = new mongoose.Schema({
    feedback_ack:{
        type:Boolean
    },
    rating_ack:{
        type:Boolean
    }
},{
    timestamps:true
});

module.exports = mongoose.model('RatingAck',ratingackSchema);