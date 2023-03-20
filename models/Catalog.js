const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
    descriptor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    },
    catagories:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }],
    fulfillments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Fulfillment'
    }],
    payments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Payment'
    }],
    offers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Offer'
    }],
    providers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Provider'
    }],
    exp:{
        type:String,
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Catalog',catalogSchema);