const mongoose = require('mongoose');

const scalarSchema = new mongoose.Schema({
    type:{
        type:String
    },
    value:{
        type:Number
    },
    estimated_value:{
        type:Number
    },
    computed_value:{
        type:Number
    },
    range:{
        min:{
            type:Number
        },
        max:{
            type:Number
        }
    },
    unit:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Scalar',scalarSchema);