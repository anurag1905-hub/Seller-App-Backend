const mongoose = require('mongoose');

const itemQuantitySchema = new mongoose.Schema({
    allocated:{
        count:{
            type:Number,
            minimum:0
        },
        measure:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Scalar'
        }
    },
    available:{
        count:{
            type:Number,
            minimum:0
        },
        measure:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Scalar'
        }
    },
    maximum:{
        count:{
            type:Number,
            minimum:1
        },
        measure:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Scalar'
        }
    },
    minimum:{
        count:{
            type:Number,
            minimum:0
        },
        measure:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Scalar'
        }
    },
    selected:{
        count:{
            type:Number,
            minimum:0
        },
        measure:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Scalar'
        }
    }
},{
    timestamps:true
});

module.exports = mongoose.model('ItemQuantity',itemQuantitySchema);