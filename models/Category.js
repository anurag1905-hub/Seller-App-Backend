const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_id:{
        type:String
    },
    parent_category_id:{
        type:String
    },
    descriptor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    },
    time:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Time'
    },
    tags:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tags'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Category',categorySchema);