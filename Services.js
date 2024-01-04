import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Services.css";
import { GiVacuumCleaner } from "react-icons/gi";

import { BiSolidCarWash } from "react-icons/bi";
import { MdCarRepair } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { GiGasPump } from "react-icons/gi";

import { GiCarWheel } from "react-icons/gi";
import { GiCarBattery } from "react-icons/gi";
import { GiSpray } from "react-icons/gi";
import { GiSpanner } from "react-icons/gi";

import { FaOilCan } from "react-icons/fa";
import { MdLocalCarWash } from "react-icons/md";

import { GiPoliceCar } from "react-icons/gi";

const Services = () => {
  return (
    <div className="service-page">
    <div  className="image">
    <img src="https://h4.adprosmarketing.com/aaanycar/wp-content/uploads/sites/7/2022/10/slider1.jpg"
    height="600px" width="1519px" className='img'/><br /><br />
    <div className="text">
    <h1>Automobile Services </h1>
    <ul className="services" type="none">
    <li>Interior Vaccum   <GiVacuumCleaner /></li><br />
    <li>Exterior Body Wash  <BiSolidCarWash /></li><br />
    <li>Exterior Body Polish <MdCarRepair /> </li><br />
    <li>Oil Replacement  <IoWater /></li><br />
    <li>Air Filter Cleaning <GiGasPump /></li><br />
    </ul>
    </div>
    </div>
    <h1 className="service-t1">Services We Offer</h1><br />
    <p className="service-c1">Find the best service packages for your vehicle.
     Select from a wide range of services,
      from general service to vehicle wash, 
      accidental repair to custom repair,and much more.</p>

    <div className="service-box">
    <div className="sb1" >
    <div className="sl1">
      <h1><GiCarWheel className="logos"/></h1>
    </div>
    <div className="sb-title1">
    <h3>Wheel Care</h3>
    </div>
  
    </div>
    

   
    <div className="sb2" >
    <div className="sl2">
      <h1><GiCarBattery className="logos" /></h1>
    </div>
    <div className="sb-title2">
    <h3>Battery</h3>
   </div>
    </div>

    <div className="sb3" >
    <div className="sl3">
      <h1><GiSpray className="logos" /></h1>
    </div>
    <div className="sb-title3">
    <h3>Denting & Painting</h3>
    </div>
    
    </div>

    <div className="sb4" >
    <div className="sl4">
      <h1><GiSpanner className="logos" /></h1>
    </div>
    <div className="sb-title4">
    <h3>Custom Repair</h3>
    </div>
    
    </div>

</div>

<div className="service-box">
    <div className="sb1" >
    <div className="sl1">
      <h1><FaOilCan className="logos"/></h1>
    </div>
    <div className="sb-title1">
    <h3>Oil Replacement</h3>
    </div>
  
    </div>
    
    <div className="sb2" >
    <div className="sl2">
      <h1><MdLocalCarWash className="logos" /></h1>
    </div>
    <div  className="sb-title2">
    <h3>Water Wash</h3>
   </div>
    </div>

    <div className="sb3" >
    <div className="sl3">
      <h1><GiVacuumCleaner className="logos" /></h1>
    </div>
    <div className="sb-title3">
    <h3>Interior Vaccum</h3>
    </div>
    
    </div>

    <div className="sb4" >
    <div className="sl4">
      <h1><GiPoliceCar className="logos" /></h1>
    </div>
    <div className="sb-title4">
    <h3>Body Polish</h3>
    </div>
    
    </div>

</div><br /><br />

<div className="form-img">
<img src="https://www.shutterstock.com/image-photo/car-service-technologycustomer-satisfaction-guarantee-600nw-2271159941.jpg" 
alt="/"  height="600px" width="700px" />
</div>

<form action="">
<div className="form-container">
<label for="fname" className="form-t">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name"  className="field" required/><br />
    <label for="select vehicle" className="form-t">Select Vehicle</label>
    <select id="vehicle" name="vehicle" placeholder="Select your vehicle"  required>
    <option value="none"></option>
    <option value="Bike">Bike</option>
    <option value="Car">Car</option>
    <option value="Auto">Auto</option>
  </select><br />

    <label for="Vehicle-Model" className="form-t">Vehicle-Model</label>
    <input type="text" id="vehicle-model"  placeholder="Model of your vehicle"  className="field"  required /><br />
   
    <label for="Services" className="form-t">Select-Service</label>
    <select id="service" name="service"  required>
      <option value="none"></option>
      <option >Exterior Body Polish</option>
      <option >Exterior Body Wash</option>
      <option >Interior Vaccum</option>
      <option >Oil Replacement </option>
      <option >Break Repairs</option>
      <option >Battery Replacement</option>
      <option >Denting & Painting</option>
    </select><br />

    <label for="Fuel Type" className="form-t">Fuel Type</label>
    <select id="fuel" name="fuel"  required >
    
      <option value="none" ></option>
      <option value="Petrol">Petrol</option>
      <option value="Diesel">Diesel</option>
      <option value="CNG">CNG</option>
     
    </select><br />



    <input type="submit" value="Submit" className="submit-but"></input>
    </div><br /><br /><br />
    </form>




<img src="https://images.squarespace-cdn.com/content/v1/55c0d1f8e4b0fa21b0a2e94a/1684259612044-2IV6B7Q3KT9B7PJXP45U/chicago-car-service.jpg?format=2500w"
alt="/ " width="1500px" height="300px" className="service-img"/><br /><br /><br /><br />
<h1 className="service-img-h">Why Choose Us?</h1>
<p  className="service-img-c">We Offer Full Service Auto Repair & Maintenance</p>



<div className="ser-box">
      <div className="b" >
      <div className="photo">
      <img src=" https://automechanica.com/uploads/service/service_image/13/1__7_.jpg"
      heigth="300px" width="300px" alt="/" />
      </div>
      <div className="b-title">
      <h3>Brake Repairs</h3>
      </div>
      <div className="b-body">
      <p> We all know why brake work is important,
       especially because the majority of car accidents 
       are caused by failure to stop. Get your brake pads replaced,
        which naturally wears down as you use them, 
        and aren't too costly to fix.</p>
      </div>
      </div>
     
      <div className="b" >
      <div className="photo">
        <img src="https://automechanica.com/uploads/service/service_image/14/2__5_.jpg " 
        heigth="300px" width="300px"  alt="/" />
      </div>
      <div className="b-title">
      <h3>Suspension Repairs</h3>
      </div>
      <div className="b-body"><p>The suspension system of your vehicle protects you
       from bouncing up and down due to the bad road conditions and bumps in the road. More importantly,
       it affects your steering ability, and that can mean the difference between life and death.</p>
      </div>
      </div>
  
      <div className="b" >
      <div className="photo">
      <img src="https://automechanica.com/uploads/service/service_image/6/2.jpg "
      heigth="300px" width="300px"   alt="/" />
      </div>
      <div className="b-title">
      <h3>Detailing</h3>
      </div>
      <div className="b-body">
      <p>We offers professional vehicle services at an affordable price.
      Our interior cleaning, detailing, and restoration services can 
      that new car look and smell.</p>
      </div>
      </div>
  </div>


    </div>

    
  )
}

export default Services
