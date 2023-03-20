const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    page_id:{
        type:String
    },
    next_id:{
        type:String
    },
},{
    timestamps:true
});

module.exports = mongoose.model('Page',pageSchema);