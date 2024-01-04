import React from 'react'
import { Link } from 'react-router-dom';
import { GiAutoRepair } from "react-icons/gi";

import "./Navbar.css";
const Navbar = () => {
  return (

    <header>
    <div >
    <ul type="none"  className="logo">
    <h2><li><GiAutoRepair /> Quick Fix Garage </li></h2>
    </ul>
    </div>
    
    <div className="display-menu">
    <Link className="menu" to="/">Home</Link>
    <Link className="menu" to="/services">Services</Link>
    <Link className="menu" to="/howitworks">How it works?</Link>
    <Link className="menu" to="/about">About</Link>
    <Link className="menu" to="/contact">Contact</Link>
    <Link className="menu" to="/loginsignup">Login/Signup</Link>
    </div>
    </header>
     

  )
}

export default Navbar
