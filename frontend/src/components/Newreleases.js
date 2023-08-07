import Smallcard from "./Smallcard";
import { useEffect, useState } from "react";
import axios from "axios";

function Newreleases() {
  const [movies, setMovies] = useState([{}]);


  useEffect(() => {
    axios.get("http://localhost:5000/api/movies/newreleases", { withCredentials: true })
      .then((res) => {
        setMovies(res.data); console.log(movies);
      }
      
      ).catch((err) => console.log(err));
  }, []);


  return (
    <div className=" releasesbox">
      <h4 style={{ "border-bottom": "4px solid black", "color": "#6D9886", "width" : "1290px" }}>
        New Releases
      </h4>

      {movies.map((movie) => {
        return (
          <Smallcard
            image={movie.posterlink}
            title={movie.title}
            genere={movie.genre}
            rating={movie.rating}
            id={movie._id}
            cast={movie.cast}
          >
          </Smallcard>
        );
      })}
    </div>
  );
}

export default Newreleases;
