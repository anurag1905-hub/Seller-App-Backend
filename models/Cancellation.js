const mongoose = require('mongoose');

const cancellationSchema = new mongoose.Schema({
    type:{
        type:String
    },
    ref_id:{
        type:String
    },
    policies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Policy'
    }],
    time:{
        type:String
    },
    cancelled_by:{
        type:String,
        required:true
    },
    reasons:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option'
    },
    selected_reason:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option'
    },
    additional_description:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Cancellation',cancellationSchema);