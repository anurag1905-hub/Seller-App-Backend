const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    feedback_form:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FeedbackForm'
    },
    feedback_url:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FeedbackUrl'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Feedback',feedbackSchema);