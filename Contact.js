import React from 'react'
import "./Contact.css";
import { GrMail } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
  return (
    <div className="contact-page">
     <img src="https://cognizant.scene7.com/is/image/cognizant/automotive-technology-solutions-connectivity-banner-1" 
    width="1519px"  alt="/" />
    <h1 className="txt1">Contact Us</h1>
    <ul type="none" >
     <li className="txt-icon1"><h1><GrMail />   E-mail</h1></li><br />
    <li className="txt-icon2"><h1><ImPhone/>   Mobile</h1></li>
    </ul>

    <div className="contact-box">
      <div className="cb-1" >
      <div className="logo-1">
        <p><MdLocationPin className="logo-size" /></p>
      </div>
      <div className="cb-title1">
      <h1>Address</h1>
      </div>
      <div className="cb-body1">
      <p> Green Fort , Theethipalayam , Coimbatore-641010</p>
      </div>
      </div>
      

     
      <div className="cb-2" >
      <div className="logo-2">
        <p><MdMail className="logo-size" /></p>
      </div>
      <div className="cb-title2">
      <h1>Mail</h1>
      </div>
      <div className="cb-body2"><p>support@quickfixgarage.com</p>
      </div>
      </div>

      <div className="cb-3" >
      <div className="logo-3">
        <p><PiPhoneDisconnectFill className="logo-size"/></p>
      </div>
      <div className="cb-title3">
      <h1>Mobile</h1>
      </div>
      <div className="cb-body3">
      <p>9932-020-542</p>
      </div>
      </div>
</div>

<img src="https://www.geotab.com/CMS-Media-production/UK/Resources/Blogs/2022/January/ConnectedCarsConnectedFleets/connected-car-blog-AdobeStock_190904424-823729237-hero@2x.jpg" 
alt="/"  className="contact-img" />

<p className="img-t">we can help. our team of experts is on hand to answer your question, by using our website,
 you can watch many services, you can easily contact us.
 24/7 any problem at any time, we are ready for your help, so pls contact us <br /><br />
 <h3 className="follow">Follow Us On:</h3>
 <ul className="followus" type="none">
<li><a herf="#"><h3><FaFacebookF/></h3></a></li>
<li><a herf="#"><h3><FaInstagram/></h3></a></li>
<li><a herf="#"><h3><FaTwitter/></h3></a></li>
<li><a herf="#"><h3><FaLinkedinIn/></h3></a></li>
<li><a herf="#"><h3><TfiYoutube/></h3></a></li>
<li><a herf="#"><h3><IoLogoWhatsapp/></h3></a></li>

</ul>
 </p>


    </div>
  )
}

export default Contact
