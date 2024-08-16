import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Pets from "./Pages/Pets";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/pets" element={<Pets/>}/>
      <Route path="/login" element={<Pets/>}/>
    </Routes>

    </>
  );
}

export default App;
