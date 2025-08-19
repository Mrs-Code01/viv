import React from "react";
import n17 from "../assets/images/17.jpg";
import n25 from "../assets/images/viv10.jpg";
import n24 from "../assets/images/24.jpg";
import n29 from "../assets/images/29.jpg";
import vivcateringStyle from "../css/vivcatering.module.css";
import Footer from "../components/Footer";

const VivCatering = () => {
  return (
    <>
      <header className={vivcateringStyle.header}>
        <img src={n17} alt="" />
      </header>
      <div className={vivcateringStyle.story}>
        <div>
          <h1>STORY</h1>
        </div>
        <div>
          <h2>WELCOME TO OX-VIEN CATERING</h2>
          <p>
            At Ox-Vien Catering, we believe that food has the power to bring
            people together and foster meaningful connections. Our team is
            committed to delivering delicious, nutritious meals that exceed our
            clients' expectations.
          </p>
          <div>
            <img src={n29} alt="" />
            <img src={n24} alt="" />
            <img src={n25} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VivCatering;
