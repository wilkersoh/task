const mongoose = require('mongoose');
const validator = require('validator');


const User = mongoose.model('User',{
    name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 15,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error('Password cannot contain "password')
            }
        }
    },  
    age: {
        type: Number,
        default: 1,
        validate(value){
            if(value < 0 ){
                throw new Error('Age must above zero')
            }
        }
    }
})  

module.exports = User;