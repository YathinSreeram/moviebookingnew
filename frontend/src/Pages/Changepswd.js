
import '../Styling/accountpage.css';
import Header from '../components/Header';
import axios from 'axios';

import { useState } from 'react';


function Changepswd()
{
    const [changed, setChanged] = useState(false)


    const [password, setPassword] = useState("")
    const [newpassword, setNew] = useState("");
    const [cnfmpswd, setCnfm] = useState("");



    function updatepswd(event)
    {
        setPassword(event.target.value);
    }

    function updatecnfm(event)
    {
        setCnfm(event.target.value);
        setNew(event.target.value);
    }


    function update(event)
    {
        event.preventDefault();
        const user = { password: password, newPassword : newpassword, confirmNewPassword : cnfmpswd }

        axios.patch("http://localhost:5000/api/v1/users/updatePassword", user, { withCredentials: true })
      .then((res) => {console.log(res.data); setCnfm(""); setNew(""); setPassword(""); setChanged(true) })
      .catch((err) => console.log(err));
    }
    

    return(


        <div style={{"display" : "flex"}} >
            <Header></Header>   
            <div className="sidenavbox2">

                <ul class="nav flex-column">

                <li class="nav-item linkbox">
                    <a className="linkitem" href="/account">Account Details</a>
                </li>

                <li class="nav-item linkbox">
                    <a className="linkitem" href="/changepswd">Change Password</a>
                </li>

                <li class="nav-item linkbox">
                    <a className="linkitem" href="/mybookings">My Bookings</a>
                </li>

                </ul>

            </div>

            <div className='chagepswform' >
                <form onSubmit={update}>
                    <h2>Change Password:</h2>
                    <input onChange={updatepswd} value={password} className='changeinput'  type='password' placeholder='Current Password' ></input>
                    <input onChange={updatecnfm} value={newpassword} className='changeinput' type='password' placeholder='New Password' ></input>

                    <a><button className='changesubmitbtn' type='submit'>Submit</button></a>

                    {changed && <h5 style={{"margin-left" : "480px" , "margin-top" : "50px"}} >Password Changed</h5> }
                </form>
            </div>
            
        </div>

        
    );
}


export default Changepswd;
