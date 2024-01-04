import {Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Howitworks from "./Howitworks";
import LoginSignup from "./LoginSignup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Copyright from "./Copyright";



function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/howitworks" element={<Howitworks />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/loginsignup" element={<LoginSignup />} />
    
    </Routes>
    <Footer />
    <Copyright />
    
  </>
  )
}

export default App;
