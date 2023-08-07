
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signuppage()
{

    const [alertmsg, setAlert] = useState("");

    const[cnfmpassword, setCnfm] = useState('');

    const handlepass = (e) => {
        setCnfm(e.target.value);
    }


    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        phno: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    function postdata(event)
    {
        event.preventDefault();
        const user = formData;
        console.log(user)

        if(formData.password == cnfmpassword)
        {
        axios.post("http://localhost:5000/api/user/signup", user, { withCredentials: true })
                .then((res) => {console.log(res.data) ; setAlert("User Registered"); navigate('/'); })
                .catch((err) => {setAlert(err.response.data.message); console.log(err) });
        }
        else{
            setAlert("User name and password are not same")
        }
    }

    return(
        <div  className="loginpagebackground">

            <h1 className="loginheading">MovieSpot</h1>
            
            <div className="loginform-position" >
                
            <form className="signupformbox" onSubmit={postdata} >
            <h3 className="formboxheading" >SIGN-UP</h3>
                    
                    <input onChange={handleChange} value={formData.username} className="forminput" type="text" placeholder="USERNAME" name="username" /><br></br>

                    <input  onChange={handleChange} value={formData.email} className="forminput" type="text" placeholder="EMAIL" name="email" /><br></br>
                    
                    <input onChange={handleChange} value={formData.password} className="forminput" type="password" placeholder="PASSWORD" name="password" /><br></br>

                    <input onChange={handlepass} value={cnfmpassword} className="forminput" type="password" placeholder="CONFIRM PASSWORD" name="cnfmpassword" /><br></br>

                    <input onChange={handleChange} value={formData.phno} className="forminput" type="text" placeholder="Ph.No" name="phno" /><br></br>
                    
                    <a href="/" className="alreadsignedup">SIGNED UP ALREADY?</a>

                    <div  >
                    <button className="loginbtn formbtn" type="submit">SIGN-UP</button> 
                    </div>

                    <h6 style={{"color" : "red", "textAlign" : "center"}} >{alertmsg}</h6>

            </form>
            </div>           
           
        </div>
    );
}

export default Signuppage;