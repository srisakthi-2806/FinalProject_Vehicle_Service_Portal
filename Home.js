import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { TbEyeSearch } from "react-icons/tb";
import { BsPersonArmsUp } from "react-icons/bs";
import { HiMiniCurrencyRupee } from "react-icons/hi2";

import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import "./Home.css";




const Home = () => {
  return (
    <div>
    <Carousel className='carousel'>

    <div  className="carousel_items">
        <img src="https://images.squarespace-cdn.com/content/v1/63d8e2cd1deafc79af3ee79b/18dd0c2f-a737-4566-9dde-70a757c9ec5a/auto-mechanic-is-fixing-engine-car-with-socket-wrench-panoramic-banner-with-copy-space-black-background.png"
        height="600px" width="500px" className='img'
        />
        <div className="text">
    <h1>Professional Auto Repair</h1><h1> & Maintenance</h1><br />
    </div>

    <div className="words">
    <p>We are dedicated to provide high-quality auto repair and maintenance </p>
    <p>to keep
    your vehicle safe on the road.</p>
   <p>We give your vehicles the care it deserves.
    </p>
    
    </div>
        
    </div>

    <div className="carousel2">
        <img src="https://media.istockphoto.com/id/929116864/photo/car-care-upgrading-automotive-industry-team-building-team-work-friends-friendship-oneness-help.jpg?s=612x612&w=0&k=20&c=3MnlrwePDD07c28aQnKol8Z4p8pVFyzPhmvbhtnpdHs="
        height="600px" width="500px" className='img2'
        />
        <div className="text2">
        <h1>Performance Without Compromise</h1>
        </div>
        <div className="words2">
        <p>Our skilled technicians use genuine OEM parts at our workshop to take care of 
        any mechanical issue with ease and confidence.</p>
        <p>We provide a wide range of automotive maintenance services.
        </p>
        </div>
       
    </div>

    <div className="carousel3">
        <img src="https://www.theaa.com/~/media/the-aa/article-summaries/driving-advice/service-repair/car-servicing.jpg?rev=480860eac0324300ad1b7932e0e63e87&hash=C1A66CAC47B958FAFC665FD4977986BC"
        height="600px" width="500px"  className='img3'
        />

        <div className="text3">
        <p>Luxury Vehicle Care Delivery</p>
        </div>

        <div className="words3">
        <p>Quick Fix Garage is your dealer alternative to your vehicle service</p>
        <p> and repair needs.</p>
        <p>Our  experienced technicians provide reliable and consistent</p>
        <p> service 
        for all your auto repair needs.</p>
        </div>
       
    </div>

</Carousel>

<div className="centerpart">
<p className="heading">Why Choose Vehicle Care In Quick Fix Garage?</p>
<p className="content">A vehicle is a prized possession, no matter whether it's a hatchback, SUV, or sedan.
 And so, it is important that it is handled by the right set of hands.
  We understand the worries and apprehension one might have while looking for car service & repair.
   There are various centers that charge unreasonable prices for low-quality service while others can't be trusted with authentic
    and genuine spares and products. We aims to solve all such car woes by providing quality car service through
     a branded network of garages that work under a streamlined quality process and follow rigorous measures to
      maintain transparency and affordability for the end vehicle owner.</p>

      <div className="cards">
      <div className="card-container1" >
      <div className="img-container1">
        <h2><FaScrewdriverWrench className="i" /></h2>
      </div>
      <div className="card-title1">
      <h3>Genuine Parts</h3>
      </div>
      <div className="card-body1">
      <p>Top-notch quality with OEM/OES spares only.</p>
      </div>
      </div>
      

     
      <div className="card-container2" >
      <div className="img-container2">
        <h1><TbEyeSearch className="i" /></h1>
      </div>
      <div className="card-title2">
      <h3>Transparent</h3>
      </div>
      <div className="card-body2"><p>24X7 assistance and live status updates.</p>
      </div>
      </div>

      <div className="card-container3" >
      <div className="img-container3">
        <h1><BsPersonArmsUp className="i" /></h1>
      </div>
      <div className="card-title3">
      <h3>Hassel-Free</h3>
      </div>
      <div className="card-body3">
      <p>Services delivered through bespoke solutions.</p>
      </div>
      </div>

      <div className="card-container4" >
      <div className="img-container4">
        <h1><HiMiniCurrencyRupee  className="i" /></h1>
      </div>
      <div className="card-title4">
      <h3>Honest Pricing</h3>
      </div>
      <div className="card-body4">
      <p>Best quote in the industry for your vehicle service.</p>
      </div>
      </div>

      </div>

      
     <h1 className="t2">Best Prices-No Hidden Costs</h1>
     <h4 className="topic">Reliability - Same Day Delivery</h4>
     <p className="c2">In addition to adherence to quality car service, we also care for your time. With VehicleCare you can never expect to be disappointed. We promise same-day delivery on all car services and assure you the most top-notch service every time.</p>

     <h4 className="topic">Convenience - No Hassles</h4>
     <p className="c2">We have simplified the process of car service for you in easy steps. Now, servicing cars in Gurgaon is not a hassle. Simply book your car service from the comfort of your home and our expert will take on the full procedure on your behalf.</p>

     <h4 className="topic">Genuine Spares - Guaranteed</h4>
     <p className="c2">All our workshops guarantee genuine spares for car repairing. We maintain a supply of genuine spare through a network sourcing from OEM/OES.</p>

     <h4 className="topic">Stay Assured - 1 Month Warranty</h4>
     <p className="c2">With VehicleCare you can be assured of a long and untrampled drive. We provide a full one-month warranty on car service and promise unconditional money back for that time period.</p>
      
     <h1 className="dabba-heading">We provide expert vehicle services</h1>
           
     <div className="dabba">
     <div className="dabba1" >
     <div className="img-1">
       <img src="https://vehiclecare.in/static/media/boost-custumer.6b60e57035afc3124b0561745ad7f5b4.svg"
       height="200px" width="200px" alt="/" />
     </div>
     <div className="dabba-title1">
     <h3>Boost Customer Satisfication</h3>
     </div>
     <div className="dabba-body1">
     <p>Customers are the most important part of your business.
      We try to offer good services to our customer so that they don't get upset.</p>
     </div>
     </div>
     
    
     <div className="dabba2" >
     <div className="img-2">
       <img src="https://vehiclecare.in/static/media/reduce-cyle-time.db6df6683516e5f1cbfe2da938837258.svg "
       height="200px" width="200px"  alt="/" />
     </div>
     <div className="dabba-title2">
     <h3>Reduce Cycle Time</h3>
     </div>
     <div className="dabba-body2"><p>Smooth workflows and minimize manual activities.
     At less time we deliver best service to you.</p>
     </div>
     </div>
 
     <div className="dabba3" >
     <div className="img-3">
       <img src="https://vehiclecare.in/static/media/lower-repair-cost.40ef8d78476694b4f7d1476431bfcbeb.svg" 
       height="200px" width="200px"  alt="/" />
     </div>
     <div className="dabba-title3">
     <h3>Lower Repair Cost</h3>
     </div>
     <div className="dabba-body3">
     <p>We always try to provide low cost service and repair to our cutomers.</p>
     </div>
     </div>
 
     <div className="dabba4" >
     <div className="img-4">
       <img src="https://vehiclecare.in/static/media/experience-full.ca8a5e78bba04edc2c5dd6a691cd1fc0.svg" 
       height="180px" width="180px"  alt="/"   />
     </div>
     <div className="dabba-title4">
     <h3>Experience Full Control</h3>
     </div>
     <div className="dabba-body4">
     <p>Our most popular service is our Virtual Receptionist. 
     We know that sometimes it's difficult to get.</p>
     </div>
     </div>
 
     </div>

     <h1 className="picture-heading">How it works?</h1>

<img src="https://vehiclecare.in/static/media/track-manage.432210f244cab2bbb348ee1f40766488.svg"
heigth="800px" width="1500px" alt="/"  />

<h1 className="adv-head">Qiuck Fix Garage Advantages</h1>

<div className="adv-box">

<div className="adv" >
<div className="aimg1">
<img src="https://images.squarespace-cdn.com/content/v1/51297e5de4b01fa6748bc904/1382943188070-X2RMY9MOWZJ140BH9YV2/mechanics+hands+smaller.jpg?format=1000w " 
height="300px" width="300px" alt=" /" className="adv-img" />
</div>
<div className="overlay">
<div className="adv-con">
<h4 className="adv-t">Reduce Cycle Time</h4>
<p>At less time we deliver best service to you</p>
</div>
</div>

</div>

<div className="adv" >
<div className="aimg2">
<img src="https://images.squarespace-cdn.com/content/v1/53473da8e4b0dd40982ce97e/1497266677056-NQE0WDXS09A07GU07YSE/20170612+-+Roll+139+-+006-Nick-Bedford%2C-Photographer-Black+and+White%2C+Film%2C+Gladstone+Road+Garage%2C+Kodak+Tri-X+400%2C+Leica+M7%2C+Mechanic%2C+Portrait%2C+Rodinal%2C+Voigtlander+35mm+f1.7+Ultron+Aspherical.jpg " 
height="300px" width="300px"  alt=" /" className="adv-img" />
</div>
<div className="overlay">
<div className="adv-con">
<h4 className="adv-t">State Of The Art Workshop</h4>
<p>Highly trained service specialists</p>
</div>
</div>

</div>

<div className="adv" >
<div className="aimg3">
  <img src="https://i.pinimg.com/originals/2b/89/d1/2b89d1ad61e3777b8014afb26eaa8dfe.jpg "
  height="300px" width="300px"   alt=" /" className="adv-img" />
</div>
<div className="overlay">
<div className="adv-con">
<h4 className="adv-t">Genuine OEM Products</h4>
<p>Reliable & Genuine Parts At Valuable Prices</p>
</div>
</div>
</div>

<div className="adv" >
    <div className="aimg4">
    <img src="https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2022/02/Picture-1-2.jpg?resize=600%2C387 "
    height="300px" width="300px"   alt=" /" className="adv-img" />
    </div>
    <div className="overlay">
<div className="adv-con">
<h4 className="adv-t">Fair & Transparent Pricing</h4>
<p>providing low cost service and repair to our customers</p>
</div>
</div>
    
    </div>


</div>


<h1 className="cnct-heading">Contact Us </h1><br />
</div>


<div className="cnct-box">
      <div className="cnct-1" >
      <div className="ic-1">
        <p><FaPhoneVolume className="ic-1"/></p>
      </div>
      <div className="cnct-title1">
      <h1>Make A Call</h1>
      </div>
      <div className="cnct-body1">
      <p> Open for 24X7 Mon-Sat, <br /><h2>9932-020-542</h2></p>
      </div>
      </div>
      

     
      <div className="cnct-2" >
      <div className="ic-2">
        <p><IoMdMail className="ic-2" /></p>
      </div>
      <div className="cnct-title2">
      <h1>Email</h1>
      </div>
      <div className="cnct-body2"><p> Open for 24X7 Mon-Sat,<br /><h2>support@quickfixgarage.com</h2></p>
      </div>
      </div>
</div>

    </div>
  )
}

export default Home
