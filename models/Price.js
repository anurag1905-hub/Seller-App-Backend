const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    currency:{
        type:String
    },
    value:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DecimalValue'
    },
    estimated_value:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DecimalValue'
    },
    computed_value:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DecimalValue'
    },
    listed_value:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DecimalValue'
    },
    offered_value:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DecimalValue'
    },
    minimum_value:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DecimalValue'
    },
    maximum_value:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DecimalValue'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Price',priceSchema);