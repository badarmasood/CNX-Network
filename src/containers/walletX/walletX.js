import React from "react";
import Banner from "../../components2/walletXComponent/section1-Banner/Banner";
import Assets from "../../components2/walletXComponent/section2-Assets/Assets";
import Trade from "../../components2/walletXComponent/section3-Trade/Trade";
import Referral from "../../components2/walletXComponent/section4-Referral/Referral";
import Reliable from "../../components2/walletXComponent/section5-Reliable/Reliable";
import Staking from "../../components2/walletXComponent/section6-Staking/Staking";
import Footer from "../../components2/Footer/Footer";

import Header from "../../components/partials/header";
import NavBar from "../../components2/navBar/NavBar";
// import Footer from "../../components/partials/footer";
const walletX = () => {
  return (
    <>
      {" "}
      <Header />
      <NavBar />
      <Banner />
      <Assets />
      <Trade />
      <Referral />
      <Reliable />
      <Staking />
      <Footer />
    </>
  );
};

export default walletX;
