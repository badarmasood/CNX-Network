import React, { useEffect } from "react";
import AOS from "aos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { Tabs } from "@mui/material";
function TabBarr() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
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
          <Route
            exact
            path="/cnx_network/creditcard"
            element={<CreditCard />}
          />
          <Route
            exact
            path="/cnx_network/cnxconnect"
            element={<CnxConnect />}
          />
          <Route exact path="/cnx_network/walletx" element={<WalletX />} />
        </Routes>
      </Router>
    </>
  );
}

export default TabBarr;
