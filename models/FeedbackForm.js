const mongoose = require('mongoose');

const feedbackformSchema = new mongoose.Schema({
    form:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FeedbackFormElement'
    }],
},{
    timestamps:true
});

module.exports = mongoose.model('FeedbackForm',feedbackformSchema);