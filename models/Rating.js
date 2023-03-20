const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rating_category:{
        type:String
    },
    rating_id:{
        type:String
    },
    value:{
        type:Number,
        minimum:1,
        maximum:5
    },
    feedback_form:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FeedbackForm'
    },
    feedback_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FeedbackUrl'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Rating',ratingSchema);