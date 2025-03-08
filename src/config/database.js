const mongoose = require('mongoose')
const connectDB = async ()=>
{
    await mongoose.connect(
        "mongodb+srv://sahaanirban278:RhypjUEC1qtRhbFO@namaste.kw0v0.mongodb.net/devTinder"
    
    );
};

module.exports = connectDB



