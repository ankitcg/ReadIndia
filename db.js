const mongoose = require('mongoose');

const connectToDb = ()=>{
    try {
        mongoose.connect(process.env.mongoURI);
        console.log('Connected To Db');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectToDb;