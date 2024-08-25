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
import Adopt from "./Pages/Protected/user/Adopt";
import AdoptCheckout from "./Pages/Protected/user/AdoptCheckout";
import UserAccount from "./Pages/Protected/UserAccount";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import AdminRoutes from "./components/Routes/AdminRoutes";
import AdminDashboards from "./Pages/Protected/admin/AdminDashboards";
import UserDashboard from "./Pages/Protected/user/UserDashboard";
import CreateCategory from "./Pages/Protected/admin/CreateCategory";
import CreateProduct from "./Pages/Protected/admin/CreateProduct";
import AllUsers from "./Pages/Protected/admin/AllUsers";
import Orders from "./Pages/Protected/user/Orders";



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
      //usersRoutes
      <Route path="/dashboard" element ={ <ProtectedRoutes/>}>
        <Route path="user-account" element={<UserAccount/>}/>
        <Route path="user-dashboard" element={<UserDashboard/>}/>
        <Route path="adopt" element={<Adopt/>}/>
        <Route path="adopt-checkout" element={<AdoptCheckout/>}/>
        <Route path="orders" element={<Orders/>}/>
      </Route>
      //adminRoutes
      <Route path="/dashboard" element={<AdminRoutes/>}>
        <Route path="admin-dashboard" element={<AdminDashboards/>}/>
        <Route path="create-category" element={<CreateCategory/>}/>
        <Route path="create-product" element={<CreateProduct/>}/>
        <Route path="all-users" element={<AllUsers/>}/>
      </Route>
    </Routes>
    <Footer />

    </>
  );
}

export default App;
