
const Movie = require('../models/Moviemodel');
const Seat = require("../models/Seatsmodel");

// add booked seats 
const addbookedseat = async (req,res) => {


    console.log("I am adbookedseat..........................");

    const  movietobook = { mviid : req.body.mviid, seatsbooked : req.body.seats };   
    try{
 
        const x = await Seat.find({mviid : req.body.mviid})
        
        if(x.length == 0)
        {
            console.log(movietobook);

            await Seat.create(movietobook);
            // await Seat.save();
            
            console.log("seats sent");
            // next(); 
            console.log("booking done");
        }
        else 
        {
            const found = await Seat.findOne({mviid : req.body.mviid})
            console.log(found);
            const newseats = req.body.seats;
            console.log(newseats);
            console.log(req.body.mviid);

            const aaa = await  Seat.findOneAndUpdate({mviid: req.body.mviid}, {$push: {seatsbooked: { $each : movietobook.seatsbooked}}});
            // Seat.save();
            // res.status(200).json({message : "He"})
            
            //next();

            

            console.log("booking done");
   
            
            // console.log(newseats)
            // await found.seatsbooked.each(newseats); 
            // // await found.seatsbooked.push(movietobook.seatsbooked); 
            // await found.save();
            // console.log("New seats also added")
            // //next();
        }

        console.log("I am outside of adbookedseat..........................")

        
        //res.status(200).json({message : "Well done"});
        //next();
        
        
    }
    catch (error) {
        res.status(400).json({m: error.message})
    }
}




//show booked seats
const displaybookedseats = async (req,res) => {

    console.log(req.params.id);
    try{

        const x = await Seat.findOne({mviid : req.params.id})
        res.status(200).json({seatsalreadybooked : x.seatsbooked})
        console.log(x);
        
    }
    catch (error) {
        res.status(400).json({m: error.message})
    }
}




module.exports = {addbookedseat, displaybookedseats}