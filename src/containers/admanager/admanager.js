import React from "react";
import Banners from "../../components2/adManagerComponents/section1-Banner/Banner";
import Monetise from "../../components2/adManagerComponents/section2-Monetise/Monetise";
import Advertise from "../../components2/adManagerComponents/section3-Advertise/Advertise";
import Earn from "../../components2/adManagerComponents/section4-Earn/Earn";
import Advertisement from "../../components2/adManagerComponents/section5-Advertisement/Advertisement";
import MonetizeAds from "../../components2/adManagerComponents/section6-MonetizeAds/MonetizeAds";
import Footer from "../../components2/Footer/Footer";

const admanager = () => {
  return (
    <>
      <Banners />
      <Monetise />
      <Advertise />
      <Earn />
      <Advertisement />
      <MonetizeAds />
      <Footer />
    </>
  );
};

export default admanager;
