import "./App.css";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Loginpage from "./Pages/Loginpage";
import Popular from "./Pages/Popular";
import Signuppage from "./Pages/Signuppage";
import Singlemovieinfo from "./Pages/Singlemovieinfo";
import Trending from "./Pages/Trending";
import Changepswd from "./Pages/Changepswd";
import Bookings from "./Pages/Bookings";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/trending" element={<Trending />}></Route>
          <Route path="/home/popular" element={<Popular />}></Route>
          <Route path="/movieinfo/:id" element={<Singlemovieinfo />}></Route>
          <Route path="/signup" element={<Signuppage />}></Route>

          <Route path="/account" element={<Account />}></Route>
          <Route path="/changepswd" element={<Changepswd />}></Route>
          <Route path="/mybookings" element={<Bookings />}></Route>
        </Routes>
      </main>
    </Router>
    // <div>
    //   <Home></Home>
    // </div>
  );
}

export default App;
