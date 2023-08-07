
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Loginpage()
{
    
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const navigate = useNavigate();

    function postdata(event)
    {
        event.preventDefault();
        const user = {username : formData.username, password : formData.password}
        axios.post("http://localhost:5000/api/user/login", user , { withCredentials: true })
                .then((res) => {navigate('/home'); console.log(res.data)})
                .catch(err => console.log(err));
    }

    return(
        <div  className="loginpagebackground" >

            <h1 className="loginheading">MovieSpot</h1>
            
            <div className="loginform-position" >
                
            <form className="loginformbox" onSubmit={postdata} >
            <h3 className="formboxheading" >Login</h3>
                    
                    <input value={formData.username} onChange={handleChange} className="forminput" type="text" placeholder="Username" name="username" /><br></br>
                    
                    <input value={formData.password}  onChange={handleChange} className="forminput" type="password" placeholder="PASSWORD" name="password" /><br></br>

                    <a href="#" className="forgotlink">FORGOT YOUR PASSWORD?</a> <br></br>
                    <a href="/signup" className="signuplink">NEED SIGNUP?</a>

                    <div  >
                    <button className="loginbtn formbtn" type="submit">LOGIN</button> 
                    
                    </div>

            </form>

            </div>           
           
        </div>
    );
}


export default Loginpage;