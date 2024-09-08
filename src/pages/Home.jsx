import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sublime from "../components/Sublime/Sublime";
import Menu from "../components/Menu/Menu";
import BreakFast from "../components/BreakFast/BreakFast";
import { Link } from "react-router-dom";
import Hungry from "../components/Hungry/Hungry";
import Catering from "../components/Catering/Catering";
import Cookies from "../components/Cookies/Cookies";
import AboutUs from "../components/AboutUs/AboutUs";
import Contact from "../components/Contact/Contact";
import Feel from "../components/Feel/Feel";
import Pizza from "../components/Pizza/Pizza";
import AllProducts from "../components/AllProducts/AllProducts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sublime />
      <Menu />
      <Link to={`/menu?type=all`}></Link>
      <BreakFast />
      <AllProducts />
      <Hungry />
      <Catering />
      <Cookies />
      <AboutUs />
      
    
      <Pizza />
      <Footer />
    </div>
  );
};

export default Home;
