import React from 'react'
import { Link } from 'react-router-dom';
import { GiAutoRepair } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="foot">
    <div className="sec1">
    <h2><GiAutoRepair /> Quick Fix Garage </h2>
    <p>Quick Fix Garage provides premium quality care for your luxury vehicle service at an affordable price. 
    With a fair and transparent pricing mechanism,
     we rebuild your trust in vehicle service and live updates.</p>
<ul className="ic" type="none">

<li><a herf="#"><h3><FaFacebookF/></h3></a></li>
<li><a herf="#"><h3><FaInstagram/></h3></a></li>
<li><a herf="#"><h3><FaTwitter/></h3></a></li>
<li><a herf="#"><h3><FaLinkedinIn/></h3></a></li>
<li><a herf="#"><h3><TfiYoutube/></h3></a></li>
<li><a herf="#"><h3><IoLogoWhatsapp/></h3></a></li>

</ul>
</div>

    <div className="sec2">
    <h2>Services</h2>
    <ul type="none">
    <li><a href="#">Interior Vaccum</a></li><br />
    <li><a href="#">Exterior Body Wash</a></li><br />
    <li><a href="#">Oil Replacement</a></li><br />
    <li><a href="#">Air Filter Cleaning</a></li>
    </ul>
    </div>

    <div className="sec3">
    <h2>Links</h2>
    <ul type="none">
    
    <li><Link to="/">Home</Link></li><br />
    <li><NavLink to="/services">Services</NavLink></li><br />
    <li><NavLink to="/howitworks">How it works</NavLink></li><br />
    <li><NavLink to="/about">About</NavLink></li><br />   
    <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    </div>
      
    <div className="sec4">
    <h2>Contact Us</h2>
    <ul type="none" >
    <li><a herf="#"><FaLocationDot />  Green Fort , Theethipalayam , Coimbatore-641010</a></li><br />
    <li> <a herf="#"><MdEmail />  support@quickfixgarage.com</a></li><br />
    <li> <a herf="#"><FaPhone />  9932-020-542</a></li>
    </ul>
    </div>  


    </div>


  )
}

export default Footer
