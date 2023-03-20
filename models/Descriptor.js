const mongoose = require('mongoose');

const descriptorSchema = new mongoose.Schema({
    name:{
        type:String
    },
    code:{
        type:String
    },
    symbol:{
        type:String
    },
    short_desc:{
        type:String
    },
    long_desc:{
        type:String
    },
    images:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Image'
    }],
    audio:{
        type:String
    },
    three_d_render:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Descriptor',descriptorSchema);