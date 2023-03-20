const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policy_id:{
        type:String
    },
    descriptor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    },
    parent_policy_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Policy'
    },
    time:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Time'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Policy',policySchema);