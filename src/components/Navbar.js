import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
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
             <Link to="/login">
              <button className="btn btn-outline-success" type="submit">Login</button>
             </Link>
            </form>
           </div>
          </nav>
        </div>
    );
}