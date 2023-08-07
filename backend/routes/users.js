const express = require('express');
const router = express.Router();
const User = require("../models/Usermodel");

const {createUser, loginuser, getprofile, addbooking , sendmail, getmybookings, bookingmail} = require('../controllers/userControllers')
const {addbookedseat} = require("../controllers/seatController")
//user signup
router.post('/signup' , createUser ,sendmail )
router.post('/login' , loginuser)
router.get('/userdetails', getprofile)
router.post('/bookmovie' ,  addbooking , bookingmail, addbookedseat)
router.get('/mybookings' , getmybookings)

module.exports = router;