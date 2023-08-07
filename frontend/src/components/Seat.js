
import "../Styling/Theatre.css";
import { useState } from "react";

const Seat = (props) => {
    
const [clicked, setClicked] = useState(false);

const handleclick =  () => {    
    setClicked(!clicked);
    setSelected(props.seatno);

}

function setSelected (m)  {
    props.updateSelection(m)
}

//  console.log(props)
const isValuePresent = props.booked.includes(props.seatno)
console.log(isValuePresent);

if(isValuePresent == true)
{
    return(

            <div className="seat"  style={{"backgroundColor" : "red"}   }  >
                    {props.seatno}
                </div>

        );
}
else
{
            return(

                <div className="seat" onClick={handleclick}  style={clicked ? {"backgroundColor" : "green"} : {"backgroundColor" : "#D8D9DA"}  }  >
                    {props.seatno}
                </div>

        );

}

// { 
//     const isValuePresent = props.booked.includes(props.seatno)

//     if(isValuePresent)
//     {
//         // return(

//         //     <div className="seat"  style={{"backgroundColor" : "red"}   }  >
//         //             {props.seatno}
//         //         </div>

//         // );
//         console.log("present")
//     }
//     else
//     {
//         return(

//                 <div className="seat" onClick={handleclick}  style={clicked ? {"backgroundColor" : "green"} : {"backgroundColor" : "#D8D9DA"}  }  >
//                     {props.seatno}
//                 </div>

//         );
//     }

// }


    // return(

    //     <div className="seat" onClick={handleclick}  style={clicked ? {"backgroundColor" : "green"} : {"backgroundColor" : "#D8D9DA"}  }  >
    //         {props.seatno}
    //     </div>

    // );
}

export default Seat;