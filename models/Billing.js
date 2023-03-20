const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Organization'
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address'
    },
    email:{
        type:String
    },
    phone:{
        type:String,
        required:true
    },
    time:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Time'
    },
    tax_number:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Billing',billingSchema);