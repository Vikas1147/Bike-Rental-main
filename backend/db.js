const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    email:{
        type:String,
        required:true
    }
});

const BookSchema = new mongoose.Schema({
    stationId:Number,
   
});


const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', BookSchema);

module.exports = {
	User,
    Book
};