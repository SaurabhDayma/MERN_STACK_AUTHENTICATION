const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema(
    {
        name : String,
        email : String,
        password : String,
    }
);

const usermodel =  mongoose.model('userauthentication' , UserSchema);

module.exports =  usermodel;


