const mongoose = require('mongoose')
const connectDB = async ()=>
{
    await mongoose.connect(
       //mongoDB connect password
     "mongodb+srv://sahaanirban278:RhypjUEC1qtRhbFO@namaste.kw0v0.mongodb.net/studentLogin"
    );
};

module.exports = connectDB



