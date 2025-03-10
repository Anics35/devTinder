const mongoose = require('mongoose')
const connectDB = async ()=>
{
    await mongoose.connect(
       //mongoDB connect password
    
    );
};

module.exports = connectDB



