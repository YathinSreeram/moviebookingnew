import Header from "../components/Header";
import "../Styling/singlebookpage.css";
import TextOverflow from "react-text-overflow";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Theatre from "../components/Theatre";

function Singlemovieinfo() {
  const { id } = useParams();

  
  const [cnfm, setCnfm] = useState("");
  const [hover, setHover] = useState(false);
  const [movie, setMovie] = useState({});

  const [like, setLike] = useState(null);
  
  const [data, setData] = useState("");

  const[m, setM] = useState(0);

  const cost = 200;

  const[k, setk] = useState(false);

  const [totalcost, setTotalcost] = useState(0);

  const [ticketnum, settkts] = useState(0);


  const [selectedseats, setSelectedSeats] = useState([]);


    const updateSelection = (x) => {
        const updatedArray = [...selectedseats, x];
        setSelectedSeats(updatedArray);
        console.log("I am after single" + selectedseats);

    }


  const handletkts = (event) => {
    if(event.target.name == '-' &&  ticketnum > 0)
    {
      settkts(ticketnum - 1);
      setTotalcost(totalcost-200)
      if(totalcost == 0)
      {
        setk(!k);
      }
    }
    else if(event.target.name == '+')
    {
      settkts(ticketnum + 1);
      setTotalcost(200 + totalcost)
      setk(true);
    }
}


const booktickets = (event) => {
  event.preventDefault();

  if(ticketnum > 0)
  {
    event.preventDefault();
    const movie = { mviid : id, nooftkts : ticketnum , cost: totalcost, seats : selectedseats};
    axios.post("http://localhost:5000/api/user/bookmovie", movie , { withCredentials: true })
            .then((res) => { 
              console.log("I am the boook button" + res.data); setTotalcost(0); setk(null) ; settkts(0); setCnfm("Booking Confirmed");             
            })
            .catch(err => console.log(err));

  }
}

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`, {
      withCredentials: true,
    })
      .then((res) => {
        let temp = res.data;
        // temp.added = new Date(res.data.data.added);
        setMovie(temp);
        console.log(temp)

        if (res.data.availability == true) {
          setData(`Movie is currently available and cost per ticket is Rs. ${cost}`);
          setM(1);
          
        } else {
          setData(`Movie is currently unavailable and can be watched on ${movie.streamingplatform}`);
        }
      }).catch((err) => console.log(err));
  }, []);


  //let imagelink = `${book.photo}`;
  return (
    <div>
      <Header></Header>
      <div className="bookbox">
        <div>
          <img
            onMouseLeave={() => {
              setHover(false);
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
            style={hover
              ? { "transform": "scale(1.02)" }
              : { "transform": "scale(1)" }}
              src={movie.posterlink}
            
            className="imagestyle"
          >
          </img>
          <div className="btns">
{/* <div style={{ "marginLeft" : "85px" }}>

  <i onClick={handleLike} class="fa fa-thumbs-up" style={ like ?  {"font-size" : "30px" , "cursor" : "pointer", "color":" green"}  :{"font-size" : "30px" , "cursor" : "pointer" , "color" : "#B46060"}  }></i>
  
  {like && <span>Liked!</span>}
</div> */}
        
          </div>
        </div>

        <div className="infobox">
          
          <h2 style={{"textAlign" : "left" ,"margin-bottom" : "30px"}}>{movie.title}</h2>
          
          <div style={{ display: "flex" }}>
            <label className="labelstyle">Cast :</label>{" "}
            <p>
              <TextOverflow text={movie.cast + "" }></TextOverflow>
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <label className="labelstyle">Director :</label>{" "}
            <p>
              <TextOverflow text={movie.director}></TextOverflow>
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <label className="labelstyle">Genre :</label>{" "}
            <p>
              <TextOverflow text={movie.genre}></TextOverflow>
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <label className="labelstyle">Produced By :</label>{" "}
            <p>
              <TextOverflow text={movie.productionhouse}></TextOverflow>
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <label className="labelstyle">Producers :</label>{" "}
            <p>
              <TextOverflow text={movie.producers}></TextOverflow>
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <label className="labelstyle">Run time:</label>{" "}
            <p>
              <TextOverflow text={movie.runtime + " minutes"}></TextOverflow>
            </p>
          </div>

          <div>
            <label className="labelstyle">Description :</label>
            <div className="desbox">
              <p>{movie.description}</p>
            </div>
          </div>

            <div
              style={{
                "color": "green",
                "textAlign": "center",
                "marginTop": "",
              }}
            >
              <h5 style={{"position" : "relative" , "left" : "-200px"}}  >{data}</h5>
            </div>

            {m &&   <div className="bookingbox" >

              <h6>No.of tickets : </h6>
              
              <button onClick={handletkts} name="-" className="tktnumberbox" >-</button>
              <span style={{"margin" : "10px"}} >{ticketnum}</span>

              
              <button onClick={handletkts} name="+" className="tktnumberbox" >+</button>

              <div style={{"display" : "flex", "margin" : "5px"}} >
                { k  && <h2>Total cost : Rs.{totalcost}</h2>}
              </div>

              <Theatre movieid={id} updateSelection={updateSelection} ></Theatre>

              <button onClick={booktickets} style={{"position" : "absolute" , "left" : "650px", "top" : "750px"}} >Book My tickets</button>

              <p style={{"position" : "absolute" , "left" : "850px", "top" : "750px"}} >{cnfm}</p> 
              
            </div>}
        </div>
      </div>
    </div>
  );
}

export default Singlemovieinfo;
