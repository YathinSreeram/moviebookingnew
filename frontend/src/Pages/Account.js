import Header from "../components/Header";
import "../Styling/accountpage.css";
import { React } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Account() {

  const[data, setData] = useState({
    username : "",
    email : "",
    phno : "",

  })

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/userdetails", {
      withCredentials: true,
    })
      .then((res) => {
      
        const user = {username : res.data.user.username , email : res.data.user.email, phno : res.data.user.phno }
        setData(user);
        console.log(user);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div>
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

      <div className="content">
        <div className="contentheading">
          <h2>Account Information</h2>
        </div>

        <div style={{ "display": "flex" }}>
          <label className="label">Username:</label>
          <p className="labelcontent">{data.username}</p>
        </div>

        <div style={{ "display": "flex" }}>
          <label className="label">Email-Id:</label>
          <p className="labelcontent">{data.email}</p>
        </div>

        <div style={{ "display": "flex" }}>
          <label className="label">Ph.No:</label>
          <p className="labelcontent">{data.phno}</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
