import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const Location = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.228453311875!2d-77.037475426243!3d-12.096506842826223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85d35de86e5%3A0x2f9aa02919d35daf!2sAstrid%20y%20Gast%C3%B3n!5e0!3m2!1sen!2saz!4v1725806597083!5m2!1sen!2saz"
          width="1000"
          height="200"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
