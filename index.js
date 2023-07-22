const express = require('express');
const app = express();
require('dotenv').config();
const connectToDb = require('./db');
const userRoute = require('./route/user');

connectToDb();

app.use(express.json());

app.use('/api/user',userRoute)

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log('Not Connected To Port');
    }
    console.log("Connected To Port Successfully");
});
