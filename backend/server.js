
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const movieRoutes = require('./routes/movies')
const userRoutes = require('./routes/users')
const seatRoutes = require('./routes/seats')
const app = express();


  const corsOptions = {
    origin: 'http://localhost:3000', // Only allow requests from this origin (e.g., a specific domain)
    methods: ['GET', 'POST'], // Only allow specified HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specified headers in requests
    credentials: true, // Allow sending cookies and HTTP authentication credentials
};

app.use(express.json())
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api/user' , userRoutes);
app.use('/api/movies', movieRoutes)
app.use('/api/booked/', seatRoutes)

// Connecting to DATABASE
mongoose.connect(process.env.MONGO_URL)
    .then(() => {console.log("Connected to database");
    app.listen(process.env.PORT, () => {
        console.log("Server listening for requests");
    })})
    .catch(err => {console.log(err)});


