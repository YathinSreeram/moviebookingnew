
const User = require('../models/Usermodel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const Movie = require('../models/Moviemodel');

require('dotenv').config()


//user signup
const createUser = async (req, res ,next) => {

    const user = req.body;

    bcrypt.hash(user.password, 10).then( async (hash) => {
        const userdata = await User.create({
                ...user, 
                password : hash})

        if(userdata)
        {
            res.status(200).json({message : "User registered"})
            next();
        }
        else
        {
            res.status(400).json({error : err})
        }
    })

}


//send email

const html = ` <h1>Welcome to MovieSpot</h1> `;

const sendmail = async (req, res) => {

    console.log(req.body);

    const mailId = req.body.email;

    try {
      const transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 465,
        secure : true,
        auth : {
            user : 'sriramyathin123@gmail.com',
            pass : "grqatlyyjbokbzou"
        }

      });
      //kmsvn2224@gmail.com
      
      const info = await transporter.sendMail({
        from : 'New test <sriramyathin123@gmail.com> ',
        to : mailId,
        subject : "Test email",
        html : html,
      })

      console.log("message sent " + info.messageId);
      
    } catch(error) {
      res.status(400).json(error);
    }

}


//send booking email



const bookingmail = async (req, res, next) => {

    const  movietobook = { mviid : req.body.mviid, nooftkts : req.body.nooftkts, cost : req.body.cost, seatsbooked : req.body.seats }; 

    const movieId = req.body.mviid;
    //var x = ""
    try{
        const movie = await Movie.findById(movieId);
        res.status(200).json(movie)
        x = movie.title;
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }

    const html1 = ` <h2>We are delighted to confirm your movie ticket booking . Enjoy the show!</h2> 
    <h1><u>Booking details</u></h1>
    <p>Movie name : ${x}</p>
    <p>No of tickets : ${req.body.nooftkts}</p>
    <p>Seats : ${req.body.seats }</p>
    
    `;

    console.log("I am bookingmail..........................")

    const accessToken = req.cookies["access-token"]

    if(!accessToken) return res.status(200).json({error : "User not authenticated"});

    try{
        const validToken = jwt.verify(accessToken, process.env.JWT_SECRET)
        if(validToken)
        {
            req.authenticated = true;
            const decoded = jwt.decode(accessToken);

            const user = await User.findById(decoded.id);
         
            const mailId = user.email;

            const transporter = nodemailer.createTransport({
                host : 'smtp.gmail.com',
                port : 465,
                secure : true,
                auth : {
                    user : 'sriramyathin123@gmail.com',
                    pass : "grqatlyyjbokbzou"
                }
        
              });
              //kmsvn2224@gmail.com
              const info = await transporter.sendMail({
                from : 'Yathin Sreeram <sriramyathin123@gmail.com> ',
                to : mailId,
                subject : "Booking Confirmed",
                html : html1,
              })
              console.log("message sent " + info.messageId);
             next()
            // return res.status(200).json({message : "Booking Confirmed"})
        }
    }
    catch (err)
    {
        return res.status(400).json({err : "Not a valid User"})
    }

}





// add booking to user
const addbooking = async(req,res, next) => {

    console.log("I am addbooking..........................")

    const  movietobook = { mviid : req.body.mviid, nooftkts : req.body.nooftkts, cost : req.body.cost, seatsbooked : req.body.seats }; 
    const accessToken = req.cookies["access-token"]
    
    if(!accessToken) return res.status(200).json({error : "User not authenticated"});
    try{
        const validToken = jwt.verify(accessToken, process.env.JWT_SECRET)
        if(validToken)
        {
            req.authenticated = true;
            const decoded = jwt.decode(accessToken);
            const user = await User.findById(decoded.id);

            user.bookings.push(movietobook);
            await user.save();
            console.log(user);

            next();
            //code to add seats in seats collection
            //res.status(200).json({message : "Booking done"})
            

        }

    }
    catch (err)
    {
        return res.status(400).json({err : "Not a valid User"})
    }

}


//user login
const loginuser = async (req, res) => {

    
    const {username, password} = req.body;
    const user = await User.findOne({username : username});
    
    if(!user) {res.status(400).json({error : "User dont exist"});}

    const dbpassword = user.password;

    bcrypt.compare(password, dbpassword).then((match) => {
        if(!match)
        {
            res.status(400).json({error : "Incorrect username and password combination"})
        }
        else
        {
            const token = generateToken(user._id)
            res.cookie("access-token" , token, {
                maxAge : 60 * 60 * 24 * 30 * 1000,
                httpOnly: true,
            });
            res.json({message : "Logged In yah!"})
            console.log("logged in")
        }
    })

}


//getmybookings
const getmybookings = async (req, res) => {

    const accessToken = req.cookies["access-token"]

    if(!accessToken) return res.status(200).json({error : "User not authenticated"});

    try{
        const validToken = jwt.verify(accessToken, process.env.JWT_SECRET)
        if(validToken)
        {
            req.authenticated = true;

            const decoded = jwt.decode(accessToken);
            const user = await User.findById(decoded.id);
            res.json({message : "Valid token" , bookings : user.bookings})
        }
    }
    catch (err)
    {
        return res.status(400).json({err : "Not a valid User"})
    }

}


//user profile
const getprofile = async (req, res) => {
    
    console.log(req.cookies);
    const accessToken = req.cookies["access-token"]

    if(!accessToken) return res.status(200).json({error : "User not authenticated"});

    try{
        const validToken = jwt.verify(accessToken, process.env.JWT_SECRET)
        if(validToken)
        {
            req.authenticated = true;
            
            const decoded = jwt.decode(accessToken);
            const user = await User.findById(decoded.id);
            res.json({message : "Valid token" , user : user})
        }
    }
    catch (err)
    {
        return res.status(400).json({err : "Not a valid User"})
    }

}


//generate token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : '1h'
    });
}


module.exports = {createUser, loginuser , getprofile, addbooking, sendmail, getmybookings, bookingmail}