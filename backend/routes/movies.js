
const express = require('express');
const router = express.Router();

const Movie = require("../models/Moviemodel");
    
const {getallmvis , getpopularmvis, gettrendingmvis,  getfranchisemvis, getmvi, addmvi, newreleases} = require('../controllers/movieControllers')


// get all movies
router.get('/' , getallmvis)


// get all popular movies to see details
router.get('/popular', getpopularmvis)


// get all trending movies to see details
router.get('/trending' , gettrendingmvis)


//post movie details by admin
router.post('/addmovie' , addmvi)


//get new releases
router.get('/newreleases', newreleases)

// get all MARVEL movies details
router.get('/franchise' , getfranchisemvis)


// get details of a particular movie
router.get('/:id' , getmvi)


//book a particular movie
router.get('/:id' , (req,res) => {
    console.log("HEY")
    
})




// //update likes of a particular movie
// router.put('/newmovie' , (req,res) => {
//     console.log("HEY")
// })

module.exports = router;