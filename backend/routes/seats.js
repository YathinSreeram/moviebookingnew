
const express = require('express');
const router = express.Router();

const Seat = require("../models/Seatsmodel");
// const addbookedseat = require("../controllers/seatController")
const {displaybookedseats} = require("../controllers/seatController")

// get all booked seats of a particular movie 
router.get('/getseats/:id' , displaybookedseats)




module.exports = router;