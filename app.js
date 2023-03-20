const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./config/mongoose');
//app
const app = express();


app.use('/api',require('./routes'));

const port = process.env.PORT || 8000;

app.listen(port,function(err){
    if(err){
        console.log('Error',err);
    }
    else{
        console.log(`Server is running successfully on port ${port}`);
    }
});
