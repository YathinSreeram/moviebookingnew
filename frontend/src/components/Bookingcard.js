import { useState, useEffect } from "react";
import TextOverflow from "react-text-overflow";
import axios from "axios";
function Bookingcard(props) {

   const [hovered, setHovered] = useState(false);
  
//   var link = "/movieinfo/" + `${props.id}`;

//   let imagelink = `${props.image}`;

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");

    const id = props.id;
    console.log("ID BEFORE" + id);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`, {
          withCredentials: true,
        })
          .then((res) => {
            const img = res.data.posterlink;
            setImage(img);
            setTitle(res.data.title)
            console.log(res.data._id);
          })
          .catch((err) => console.log(err));
    },[id]);

  return (
    <div
      onMouseLeave={() => {
        setHovered(false);
      }}
      onMouseEnter={() => {
        setHovered(true);
        
      }}

      className="bookingcard"
      style={hovered
        ? { "transform": "scale(1.06)" }
        : { "transform": "scale(1)" }}
    >
      <img
        src={image}
        style={{
          "height": "150px",
          "border": "1px solid black",
          "margin": "10px",
          "display" : "inline-block"   
        }}
      >
      </img>
      <p style={{ "fontWeight": "bolder" }}>{title}</p>
      <p className="text" >{" No of tickets : " + props.nooftkts }</p>
      <p className="text" >{"Cost : Rs. " + props.cost}</p>
      <p className="text" >{"Seats : " + props.seats}</p>
      

      {/* <a href={link}>
        <button className="smallcardview">Book Now</button>
      </a> */}
    </div>
  );
}

export default Bookingcard;
