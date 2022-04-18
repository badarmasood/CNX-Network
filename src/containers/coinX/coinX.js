import React from "react";
import Banner from "../../components2/coinXComponent/section1-Banner/Banner";
import Utility from "../../components2/coinXComponent/section2-Utility/Utility";
import Investment from "../../components2/coinXComponent/section3-Investment/Investment";
import Investor from "../../components2/coinXComponent/section4-Investor/Investor";
import DeFi from "../../components2/coinXComponent/section5-DeFi/DeFi";
import Pay from "../../components2/coinXComponent/section6-Pay/Pay";
import Footer from "../../components2/Footer/Footer";
import Header from "../../components/partials/header";
import NavBar from "../../components2/navBar/NavBar";
// import Footer from "../../components/partials/footer";
const coinX = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Banner />
      <Utility />
      <Investment />
      <Investor />
      <DeFi />
      <Pay />
      <Footer />
    </>
  );
};

export default coinX;
