import { React, useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Smallcard from "../components/Smallcard.js";
import "../Styling/Trending.css";
import Bookingcard from "../components/Bookingcard";

function Bookings() {
  // const [booksid, setBooksid] = useState();
  // const [books, setBooks] = useState([]);
  
  const [mybookings, setBookings] = useState();

  // useEffect(() => {
  //   async function fetcher() {
  //     try {
  //       let res = await axios.get("http://localhost:5000/api/user/mybookings", {
  //         withCredentials: true,
  //       });
  //       console.log(res.data.bookings)
  //       setBookings(res.data.bookings);
        
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   fetcher();
  // }, []);


  useEffect(() => {
    axios.get("http://localhost:5000/api/user/mybookings", { withCredentials: true })
      .then((res) => {
        console.log(res.data.bookings);
        setBookings(res.data.bookings);

      }
      ).catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <Header></Header>

      <div className="sidenavbox">
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
        <div
          style={{
            marginLeft: "20rem",
            marginTop: "-8rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}

        >
        {mybookings && mybookings.map((ticket) => {
        return (
          <Bookingcard
            nooftkts = {ticket.nooftkts}
            cost = {ticket.cost}
            id = {ticket.mviid}
            seats = {ticket.seatsbooked}
          >
          </Bookingcard>
        );
      })}
         
        </div>
      </div>
    </div>
  );
}

export default Bookings;
