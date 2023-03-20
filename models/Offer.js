const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    offer_id:{
        type:String,
    },
    descriptor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    },
    location_ids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Location'
    }],
    category_ids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }],
    item_ids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Item'
    }],
    time:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Time'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Offer',offerSchema);