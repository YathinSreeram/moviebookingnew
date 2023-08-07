import { useEffect, useState } from "react";
import Header from "../components/Header";
import Smallcard from "../components/Smallcard";
import "../Styling/Trending.css";
import axios from "axios";

function Trending() {

  const [movies, setMovies] = useState([{}])

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies/trending", { withCredentials: true })
      .then((res) => {
        setMovies(res.data); console.log(movies);
      }
      
      ).catch((err) => console.log(err));
  }, []);

  
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="heading">Trending Movies</h1>
      </div>

      <div className="cardbox">
        
        {
          movies.map(movie => {
            return(
              <Smallcard
            image={movie.posterlink}
            title={movie.title}
            genere={movie.genre}
            rating={movie.rating}
            id={movie._id}
            cast={movie.cast}
          >
          </Smallcard>
            )
          })
        }
      </div>
    </div>
  );
}

export default Trending;
