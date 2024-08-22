import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Pets from "./Pages/Pets";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./Pages/Register";
import Adopt from "./Pages/Protected/Adopt";
import AdoptCheckout from "./Pages/Protected/AdoptCheckout";
import UserAccount from "./Pages/Protected/UserAccount";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import AdminRoutes from "./components/Routes/AdminRoutes";
import AdminDashboards from "./Pages/Protected/AdminDashboards";



function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/pets" element={<Pets/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      
      //PROTECTED ROUTES
      <Route path="" element ={ <ProtectedRoutes/>}>
        <Route path="/user-account" element={<UserAccount/>}/>
        <Route path="/adopt" element={<Adopt/>}/>
        <Route path="/adopt-checkout" element={<AdoptCheckout/>}/>
      </Route>
      <Route path="" element={<AdminRoutes/>}>
      <Route path="/admin-dashboard" element={<AdminDashboards/>}/>
      </Route>
    </Routes>
    <Footer />

    </>
  );
}

export default App;
