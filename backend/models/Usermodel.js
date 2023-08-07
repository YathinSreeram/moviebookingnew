const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    mviid : {
        type : String,
    },
    mviname : {
        type : String,
    },
    content : {
        type : String,
    },
    nooflikes : {
        type : Number,
    }
})

const bookingSchema = new Schema({
    mviid : {
        type : String,
        required : true,
    },
    nooftkts : {
        type : Number,
        required : true,
    },
    cost : {
        type : Number,
        required : true,
    },
    seatsbooked : {
        type : Array,
        required : true,
    }
})


const userSchema = new Schema({

    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phno : {
        type : String,
        required : true
    },
    likedmvis : {
        type : Array,
    },
    bookings : [bookingSchema],
    reviews : [reviewSchema],    
    
}, {timestamps : true})

const User = mongoose.model('User' , userSchema);

module.exports = User;
