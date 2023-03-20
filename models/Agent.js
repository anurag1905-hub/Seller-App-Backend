const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    rateable:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Rateable'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Agent',agentSchema);