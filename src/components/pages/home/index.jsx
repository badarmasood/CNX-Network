import React from "react";
import Header from "../../partials/header";
import MiningStartup from "./partials/mining";
import Utilities from "./partials/utilities";
import RoadMap from "./partials/roadmap";
import Partnership from "./partials/partnership";
import Brand from "./partials/brand";
import Cooperation from "./partials/cooperation";
import Logo from "../../../assets/logo.png";
import DecoLeftThumb from "../../../assets/hero-deco-left.png";
import DecoRightThumb from "../../../assets/hero-deco-right.png";
import Footer from "../../partials/footer";
import "./index.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className="hero-section">
        <img src={DecoLeftThumb} className="deco deco-left" alt="" />
        <img src={DecoRightThumb} className="deco deco-right" alt="" />
        <div className="logo-box">
          <img
            src={Logo}
            alt="CNX-Network"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100">
          CNX-Network
        </h1>
        <h6 data-aos="fade-up" data-aos-delay="100">
          The Future of Blockchain Technology
        </h6>
        <button data-aos="fade-up" data-aos-delay="100">
          BUY CNX NOW
        </button>
      </div>
      <MiningStartup />
      <Utilities />
      <RoadMap />
      <Partnership />
      <Brand />
      <Cooperation />
      <Footer />
    </>
  );
}
