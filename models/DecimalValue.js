const mongoose = require('mongoose');

const decimalValueSchema = new mongoose.Schema({
    value:{
        type:String,
        match:[/[+-]?([0-9]*[.])?[0-9]+/,'Provide value in correct decimal format']
    }
},{
    timestamps:true
});

module.exports = mongoose.model('DecimalValue',decimalValueSchema);