import React from "react";
import Banner from "../../components2/creditCardComponent/section1-Banner/Banner";
import Access from "../../components2/creditCardComponent/section2-access/Access";
import CNXCard from "../../components2/creditCardComponent/section3-CNXCard/CNXCard";
import Convert from "../../components2/creditCardComponent/section4-Convert/Convert";
import GetItNow from "../../components2/creditCardComponent/section5-GetItNow/GetItNow";
import Download from "../../components2/creditCardComponent/section6-Download/Download";
import Footer from "../../components2/Footer/Footer";
const creditCard = () => {
  return (
    <>
      <Banner />
      <Access />
      <CNXCard />
      <Convert />
      <GetItNow />
      <Download />
      <Footer />
    </>
  );
};

export default creditCard;
