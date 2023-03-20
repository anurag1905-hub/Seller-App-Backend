const mongoose = require('mongoose');

const dimensionSchema = new mongoose.Schema({
    length:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Scalar'
    },
    breadth:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Scalar'
    },
    height:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Scalar'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Dimensions',dimensionSchema);