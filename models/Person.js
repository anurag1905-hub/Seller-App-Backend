const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Name'
    },
    image:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Image'
    },
    dob:{
        type:String
    },
    gender:{
        type:String
    },
    cred:{
        type:String
    },
    tags:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tags'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Person',personSchema);