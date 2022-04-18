import React from "react";
import Banner from "../../components2/cnxConnectComponent/section1-banner/Banner";
import Secure from "../../components2/cnxConnectComponent/section2-Secure/Secure";
import Login from "../../components2/cnxConnectComponent/section3-Login/Login";
import Backup from "../../components2/cnxConnectComponent/section4-Backup/Backup";
import Future from "../../components2/cnxConnectComponent/section5-Future/Future";
import Security from "../../components2/cnxConnectComponent/section7-Security/Security";
import Footer from "../../components2/Footer/Footer";

const cnxConnect = () => {
  return (
    <>
      <Banner />
      <Secure />
      <Login />
      <Backup />
      <Future />
      <Security />
      <Footer />
    </>
  );
};

export default cnxConnect;
