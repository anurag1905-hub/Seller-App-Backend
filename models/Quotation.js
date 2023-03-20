const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
    price:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Price'
    },
    breakup:[{
        item_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Item'
        },
        title_type:{
            type:String
        },
        title:{
            type:String
        },
        price:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Price'
        }
    }],
    ttl:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Duration'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Quotation',quotationSchema);