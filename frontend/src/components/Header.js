
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header()
{
  
  //const navigate = useNavigate();

  function logout()
  {
    
    axios.get("http://localhost:5000/api/v1/users/logout", { withCredentials: true })
      .then((res) => { console.log(res.data);  })
      .catch((err) => console.log(err));
  }


    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top " data-bs-theme="dark">
              <div className="container-fluid ">
                <a className="navbar-brand" href="/home" style={{"font-family" : "'Belanosima', sans-serif" , "fontSize": "25px" }} >MovieSpot</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                      <li className="nav-item">
                        <a className="nav-link "  href="/home/trending" style={{"font-family" : "'Ysabeau SC', sans-serif"}}> Trending Movies</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="/home/popular" style={{"font-family" : "'Ysabeau SC', sans-serif"}} >Popular Movies</a>
                      </li>

                  </ul>

                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>

                  <a href="/account" ><span class="material-symbols-outlined" style={{"color" : "white" , "margin-left" : "20px"}}>account_circle</span></a>
                  <a onClick={logout} style={{"cursor" : "pointer"}} ><span className="material-symbols-outlined" style={{"color" : "white" , "margin-left" : "20px"}} >logout</span></a>
                  
                </div>

              </div>
            </nav>
        </div>
    )
}

export default Header;

