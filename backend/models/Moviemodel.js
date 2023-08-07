const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mvireviewSchema = new Schema({
    userid:{
        type : String,
    },
    username:{
        type : String,
    },
    content : {
        type : String,
    }
})


const movieSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        requied : true
    },
    runtime : {
        type : Number,
        requied : true
    },
    genre : {
        type : String,
        required : true
    },
    cast : {
        type : Array,
        requied : true
    },
    director : {
        type : String,
        required : true
    },
    productionhouse : {
        type : String,
        required : true
    },
    producers : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    posterlink : {
        type : String,
        require : true
    },
    releasedate : {
        type : String,
        require : true
    },
    numberoflikes : {
        type : Number,
        require : true
    
    },
    availability : {
        type : Boolean,
        requied : true
    },
    streamingplatform : {

        type : String,
        required : true
    },
    numberoftkts : {
        type : Number,
        requied : true
    },
    reviews : [mvireviewSchema]

}, {timestamps : true})


const Movie = mongoose.model('Movie' , movieSchema);

module.exports = Movie;