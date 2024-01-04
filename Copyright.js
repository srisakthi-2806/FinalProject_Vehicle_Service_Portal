import React from 'react'
import "./Copyright.css";

const Copyright = () => {
  let date = new Date();
  return (
   
    <div className="copyright">
    
    <span className="text">&copy; {date.getFullYear().toString()} 
                         Quick Fix Garage | All Rights Reserved
                      </span><br /><br />
    </div>
    
    
  )
}

export default Copyright
