import React from "react";
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";



export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false); // Update login status to false on logout
    navigate("/login");
  };
    return(
        <div>
          <nav className="navbar">
           <div className="container-fluid">
            <div className="page d-flex">
             <Link to="/">
              <img src="login.png" alt="Logo" width="50" height="50" className="logo d-inline-block align-text-top"/>
             </Link>
             <Link to="/" className="nav-link active" aria-current="page" href="/">Home</Link>
            </div>
            <form className="d-flex" role="search">
             {isLoggedIn ? (
              <button className="btn btn-outline-success" type="submit" onClick={handleLogout}>Logout</button>
              ) : (
              <Link to="/login">
               <button className="btn btn-outline-success" type="submit">Login</button>
              </Link>
             )}
            </form>
           </div>
          </nav>
        </div>
    );
}