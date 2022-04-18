import React from "react";
import Banners from "../../components2/vpn/section1-Banner/Banner";
import Globe from "../../components2/vpn/section2-Globe/Globe";
import Install from "../../components2/vpn/section3-Install/Install";
import Safe from "../../components2/vpn/section4-Safe/Safe";
import Join from "../../components2/vpn/section5-Join/Join";
import Free from "../../components2/vpn/section6-Free/Free";
import Footer from "../../components2/Footer/Footer";

import Header from "../../components/partials/header";
import NavBar from "../../components2/navBar/NavBar";
// import Footer from "../../components/partials/footer";
const vpn = () => {
  return (
    <>
      {" "}
      <Header />
      <NavBar />
      <Banners />
      <Globe />
      <Install />
      <Safe />
      <Join />
      <Free />
      <Footer />
    </>
  );
};

export default vpn;
