const express = require('express');
const app = express();
require('dotenv').config();
const connectToDb = require('./db');
const userRouter = require('./route/user');

connectToDb();

app.use('/user',userRouter)

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log('Not Connected To Port');
    }
    console.log("Connected To Port Successfully");
});
