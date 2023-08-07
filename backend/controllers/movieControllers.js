
const Movie = require('../models/Moviemodel');


//get all movie
const getallmvis = async (req,res) => {
    
    try{
        const movies = await Movie.find({})
        res.status(200).json(movies)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}



// get all popular movies to see details
const getpopularmvis = async (req,res) => {
    const popularRating = 9.0;

    try{
        const movies = await Movie.find({
            rating: { $gte: popularRating }
        })
        res.status(200).json(movies)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}
{  }

// get all trending movies to see details
const gettrendingmvis = async (req,res) => {
    const trendingRating = 7.5;
    const trendingyear = '2023'

    try{
        const movies = await Movie.find({ rating: { $gte: trendingRating }, "releasedate": { "$regex": trendingyear , "$options": "i" }})
        res.status(200).json(movies)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}



// get all movies of a franchise details
const getfranchisemvis = async (req,res) => {

    const franchise = "Marvel Studios"
    try{
        const movies = await Movie.find({ productionhouse: franchise });
        res.status(200).json(movies)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
    
}


// get details of a particular movie
const getmvi = async (req,res) => {

    const movieId = req.params.id;
    try{
        const movie = await Movie.findById(movieId);
        res.status(200).json(movie)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}


//add movie details by admin
const addmvi = async (req,res) => {
    
    let movies = req.body;

    try{
        const mvis = await Movie.insertMany(movies);
        res.status(200).json(mvis);   
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}



//new releases

const newreleases = async (req, res) =>
{
    try{
        const movies = await Movie.find({ availability  : { $eq: true } })
        res.status(200).json(movies)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = 
{
    getallmvis,
    getpopularmvis,
    getfranchisemvis,
    getmvi,
    addmvi,
    newreleases,
    gettrendingmvis
}
