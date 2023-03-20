const mongoose = require('mongoose');

const intentSchema = new mongoose.Schema({
    descriptor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Descriptor'
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Provider'
    },
    fulfillment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Fulfillment'
    },
    payment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Payment'
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    offer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Offer'
    },
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Item'
    },
    tags:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tags'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Intent',intentSchema);