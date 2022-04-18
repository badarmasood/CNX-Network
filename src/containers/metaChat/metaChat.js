import React from "react";
import Banner from "../../components2/metaChatComponent/section1-Banner/Banner";
import Footer from "../../components2/Footer/Footer";
import Header from "../../components/partials/header";
import NavBar from "../../components2/navBar/NavBar";
// import Footer from "../../components/partials/footer";
import Encrypted from "../../components2/metaChatComponent/section2-Encrypted/Encrypted";
import Earning from "../../components2/metaChatComponent/section3-Earning/Earning";
import Powerful from "../../components2/metaChatComponent/section4-Powerful/Powerful";
import Install from "../../components2/metaChatComponent/section5-Install/Install";
import Payment from "../../components2/metaChatComponent/section6-Payment/Payment";
const metaChat = () => {
  return (
    <>
      {" "}
      <Header />
      <NavBar />
      <Banner />
      <Encrypted />
      <Earning />
      <Powerful />
      <Install />
      <Payment />
      <Footer />
    </>
  );
};

export default metaChat;
