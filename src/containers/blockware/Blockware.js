import React from "react";
import Banner from "../../components2/blockwareComponent/section1-Banner/Banner";
import Decentralisatized from "../../components2/blockwareComponent/section2-Decentralisatized/Decentralisatized";
import Network from "../../components2/blockwareComponent/section3-Network/Network";
import Clean from "../../components2/blockwareComponent/section4-Clean/Clean";
import Environment from "../../components2/blockwareComponent/section5-Environment/Environment";
import Records from "../../components2/blockwareComponent/section6-Records/Records";
import Footer from "../../components2/Footer/Footer";
const Blockware = () => {
  return (
    <>
      <Banner />
      <Decentralisatized />
      <Network />
      <Clean />
      <Environment />
      <Records />
      <Footer />
    </>
  );
};

export default Blockware;
