const mongoose = require('mongoose');

const feedbackformElement = new mongoose.Schema({
    element_id:{
        type:String
    },
    parent_id:{
        type:String
    },
    question:{
        type:String
    },
    answer:{
        type:String
    },
    answer_type:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('FeedbackFormElement',feedbackformElement);