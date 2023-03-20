const mongoose = require('mongoose');

const feedbackurlSchema = new mongoose.Schema({
    url:{
        type:String
    },
    tl_method:{
        type:String
    },
    params:{
        feedback_id:{
            type:String
        },
        additionalProperties:{
            type:String
        }
    }
},{
    timestamps:true
});

module.exports = mongoose.model('FeedbackUrl',feedbackurlSchema);