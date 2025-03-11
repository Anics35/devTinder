const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 50,
        },
        lastName: {
            type: String
        },
        emailId: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            min: 18,

        },
        gender: {
            type: String,
            validate(value) {
                if (!["male", "femaile", "others"].includes(value)) {
                    throw new Error("Gender data not valid")
                }
            }
        },
        photoUrl: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        },
        about: {
            type: String,
            default: "This is a default about of the user!"
        },
        skills: {
            type: [String]
        }


    },
    {
        timestamps: true,
    }
);



module.exports = mongoose.model("User", UserSchema);

