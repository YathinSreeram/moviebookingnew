import { useState, useEffect } from "react";
import TextOverflow from "react-text-overflow";

function Smallcard(props) {

  const [hovered, setHovered] = useState(false);

  var cast = "Cast : ";
  var rating = "Rating : ";
  var genere = "Genre : ";
  
  var link = "/movieinfo/" + `${props.id}`;

  let imagelink = `${props.image}`;

  return (
    <div
      onMouseLeave={() => {
        setHovered(false);
      }}
      onMouseEnter={() => {
        setHovered(true);
        console.log(hovered);
      }}

      className="smallcard"
      style={hovered
        ? { "transform": "scale(1.06)" }
        : { "transform": "scale(1)" }}
    >
      <img
        src={imagelink}
        style={{
          "height": "300px",
          "border": "1px solid black",
          "margin": "10px",
        }}
      >
      </img>
      <p style={{ "fontWeight": "bolder" }}>{props.title}</p>

      <p className="text" >{"Cast : " + props.cast}</p>
      <p className="text" >{"Genere : " + props.genere}</p>
      <p className="text" >{"Rating : " + props.rating}</p>


      <a href={link}>
        <button className="smallcardview">Book Now</button>
      </a>
    </div>
  );
}

export default Smallcard;
