import React, { useEffect } from "react";

import Home from "./components/pages/home";
import Blockchain from "./components/MyPages/Blockchain";
import Whitepaper from "./components/MyPages/Whitepaper";
import Team from "./components/MyPages/Team";

import { Route, Routes, Navigate } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./App.scss";
import Presale from "./components/MyPages/Presale";
import Presale2 from "./components/MyPages/Presale2";
import Form1 from "./components/MyComponents/Forms/Form1";
import Form2 from "./components/MyComponents/Forms/Form2";
import Form3 from "./components/MyComponents/Forms/Form3";
import Form4 from "./components/MyComponents/Forms/Form4";

import IconLabelTabs from "./components/MyComponents/Tabs";

import Investment from "./components/MyPages/PresaleComps/Investment/investment";
import Identification from "./components/MyPages/PresaleComps/identification/identification";
import Payment from "./components/MyPages/PresaleComps/payment/payment";
import PaymentSuccessfull from "./components/MyPages/PresaleComps/paymentSuccessful/paymentSuccessfull";
import Receipt from "./components/MyPages/PresaleComps/receipt/receipt";

// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components2/navBar/NavBar";
import Admanager from "./containers/admanager/admanager";
import Vpn from "./containers/vpn/vpn";
import CoinX from "./containers/coinX/coinX";
import MetaChat from "./containers/metaChat/metaChat";
import Blockware from "./containers/blockware/Blockware";
import CnxConnect from "./containers/cnxConnect/cnxConnect";
import WalletX from "./containers/walletX/walletX";
import PreSale from "./containers/preSale/preSale";
import CreditCard from "./containers/creditCard/creditCard";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/Whitepaper" element={<Whitepaper />}></Route>
      <Route path="/Blockchain" element={<Blockchain />}></Route>
      <Route path="/Team" element={<Team />}></Route>
      <Route path="/Presale" element={<Presale />}></Route>
      <Route path="/Investment" element={<Investment />}></Route>
      <Route path="/Identification" element={<Identification />}></Route>
      <Route path="/Payment" element={<Payment />}></Route>
      <Route
        path="/PaymentSuccessfull"
        element={<PaymentSuccessfull />}
      ></Route>
      <Route path="/Receipt" element={<Receipt />}></Route>

      <Route path="/Presale/Presale2" element={<Presale2 />}></Route>
      <Route path="/Presale/Presale2/Form1" element={<Form1 />}></Route>

      <Route path="/Presale/Presale2/Form2" element={<Form2 />}></Route>
      <Route path="/Presale/Presale2/Form3" element={<Form3 />}></Route>
      <Route path="/Presale/Presale2/Form4" element={<Form4 />}></Route>
      <Route path="/Utilitynetwork" element={<IconLabelTabs />}></Route>

      {/* The new ones */}
      <Route
        path="/cnx_network"
        element={<Navigate replace to="/cnx_network/admanager" />}
      />

      <Route exact path="/cnx_network/admanager" element={<Admanager />} />
      <Route exact path="/cnx_network/vpn" element={<Vpn />} />
      <Route exact path="/cnx_network/coinx" element={<CoinX />} />
      <Route exact path="/cnx_network/metachat" element={<MetaChat />} />
      <Route exact path="/cnx_network/blockware" element={<Blockware />} />
      <Route exact path="/cnx_network/presale" element={<PreSale />} />
      <Route exact path="/cnx_network/creditcard" element={<CreditCard />} />
      <Route exact path="/cnx_network/cnxconnect" element={<CnxConnect />} />
      <Route exact path="/cnx_network/walletx" element={<WalletX />} />
    </Routes>
  );
}

export default App;

// import React, { useEffect } from "react";

// import Home from "./components/pages/home";
// import Blockchain from "./components/MyPages/Blockchain";
// import Whitepaper from "./components/MyPages/Whitepaper";
// import Team from "./components/MyPages/Team";

// import { Route, Routes } from "react-router";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "./App.scss";
// import Presale from "./components/MyPages/Presale";
// import Presale2 from "./components/MyPages/Presale2";
// import Form1 from "./components/MyComponents/Forms/Form1";
// import Form2 from "./components/MyComponents/Forms/Form2";
// import Form3 from "./components/MyComponents/Forms/Form3";
// import Form4 from "./components/MyComponents/Forms/Form4";

// import IconLabelTabs from "./components/MyComponents/Tabs";

// import Investment from "./components/MyPages/PresaleComps/Investment/investment";
// import Identification from "./components/MyPages/PresaleComps/identification/identification";
// import Payment from "./components/MyPages/PresaleComps/payment/payment";
// import PaymentSuccessfull from "./components/MyPages/PresaleComps/paymentSuccessful/paymentSuccessfull";
// import Receipt from "./components/MyPages/PresaleComps/receipt/receipt";
// import TabBar from "./TabBar";
// function App() {
//   useEffect(() => {
//     AOS.init({
//       disable: "mobile",
//     });
//     AOS.refresh();
//   }, []);
//   return <TabBar />;
// }

// export default App;
