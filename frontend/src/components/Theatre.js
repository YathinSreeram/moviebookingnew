
import Seat from "./Seat";
import "../Styling/Theatre.css"
import { useState, useEffect, usePrevious } from "react";
import axios from 'axios';

const Theatre = (props) => {

    const [prebooked, setprebooked] = useState([]);

    useEffect(() => {
        console.log("IIIIIIIIIIIII " + props.movieid)
        
        axios.get(`http://localhost:5000/api/booked/getseats/${props.movieid}`, {
          withCredentials: true,
        })
          .then((res) => {
            let temp = res.data;
            console.log(temp.seatsalreadybooked)
            //setprebooked("3A")
            setprebooked(temp.seatsalreadybooked);
            //console.log(array)
    
          }).catch((err) => console.log(err));
      }, []);

    // console.log(props.movieid)

    const seats = [
        {
            row : "A",
            seatnos :  Array.from({ length: 20 }, (_, index) => index  + 1 ),
        },
        {
            row : "B",
            seatnos :  Array.from({ length: 20 }, (_, index) => index  + 1 ),
        },
        {
            row : "C",
            seatnos :  Array.from({ length: 20 }, (_, index) => index  + 1 ),
        },
        {
            row : "D",
            seatnos :  Array.from({ length: 20 }, (_, index) => index  + 1 ),
        },
        {
            row : "E",
            seatnos :  Array.from({ length: 20 }, (_, index) => index  + 1 ),
        },
        {
            row : "F",
            seatnos :  Array.from({ length: 20 }, (_, index) => index  + 1 ),
        },
        {
            row : "G",
            seatnos :  Array.from({ length: 20 }, (_, index) => index  + 1 ),
        },
        {
            row : "H",
            seatnos :  Array.from({ length: 20 }, (_, index) => index  + 1 ),
        },
        {
            row : "I",
            seatnos :  Array.from({ length: 20 }, (_, index) => index  + 1 ),
        }

    ]



        return(
            <div>

                            
            <div className="seatsinfo" >
                <div className="seatbox"  style={{"backgroundColor" : "red"}} > <p className="infodata" style={{"position" : "relative" , "left" : "-10px"}} >Booked</p> </div>
                <div className="seatbox" style={{"backgroundColor" : "green"}} ><p className="infodata" >Selected</p></div>
                <div className="seatbox" style={{"backgroundColor" : "grey"}} ><p className="infodata" >Available</p></div>

            </div>
                
                <div className="theatre" >

                  
                    <div className="section">
    
                        {
                            seats.map(seatrow => (
                               
                                seatrow.seatnos.map(seat => {
     
                                    return(
                                        <Seat booked={prebooked} updateSelection={props.updateSelection}  key={seat + seatrow.row} seatno={seat + seatrow.row} ></Seat>
                                    );
                                })
                            ))
                        }
                     
                    </div>
                    
    
                    <div className="screen" >
                        <h3>Screen</h3>
                    </div>
    
                </div>
            </div>
        );


        
    

    
    
    
}

export default Theatre;

// return(
//     <div>
        
//         <div className="theatre" >
          
//             <div className="section">

//                 {
//                     seats.map(seatrow => (
                       
//                         seatrow.seatnos.map(seat => {

//                             return(
//                                 <Seat booked={prebooked} updateSelection={props.updateSelection}  key={seat + seatrow.row} seatno={seat + seatrow.row} ></Seat>
//                             );
//                         })
//                     ))
//                 }
             
//             </div>
            

//             <div className="screen" >
//                 <h3>Screen</h3>
//             </div>

//         </div>
//     </div>
// );