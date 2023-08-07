const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const seatsSchmea = new Schema({
    mviid : {
        type : String,

    },
    seatsbooked : {
        type : Array,
    }

}, {timestamps : true})


const Seat = mongoose.model('Seats' , seatsSchmea);

module.exports = Seat;