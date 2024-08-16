import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HomepageCard from "../components/HomepageCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <HomepageCard />
      <Footer />
    </>
  );
};

export default Home;
