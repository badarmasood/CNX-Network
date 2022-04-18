import React from "react";
import Banner from "../../components2/creditCardComponent/section1-Banner/Banner";
import Access from "../../components2/creditCardComponent/section2-access/Access";
import CNXCard from "../../components2/creditCardComponent/section3-CNXCard/CNXCard";
import Convert from "../../components2/creditCardComponent/section4-Convert/Convert";
import GetItNow from "../../components2/creditCardComponent/section5-GetItNow/GetItNow";
import Download from "../../components2/creditCardComponent/section6-Download/Download";
import Header from "../../components/partials/header";
import NavBar from "../../components2/navBar/NavBar";
// import Footer from "../../components/partials/footer";
import Footer from "../../components2/Footer/Footer";
const creditCard = () => {
  return (
    <>
      {" "}
      <Header />
      <NavBar />
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
