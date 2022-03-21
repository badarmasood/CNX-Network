import React from "react";
import { Route, Routes } from "react-router";

import Home from "./Home";
import Blockchain from "./pages/Blockchain";
import Team from "./pages/Team";
import Whitepaper from "./pages/Whitepaper";
import Presale from "./pages/Presale";
import Error from "./pages/Error";
import IconLabelTabs from "./Tabs";

import Presale2 from "./pages/Presale2";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Blockchain" element={<Blockchain />}></Route>
        <Route path="/Team" element={<Team />}></Route>
        <Route path="/Whitepaper" element={<Whitepaper />}></Route>
        <Route path="/Presale" element={<Presale />}></Route>
        <Route path="/Presale/Presale2" element={<Presale2 />}></Route>

        <Route path="/Presale/Presale2/Form1" element={<Form1 />}></Route>
        <Route path="/Presale/Presale2/Form2" element={<Form2 />}></Route>
        <Route path="/Presale/Presale2/Form3" element={<Form3 />}></Route>
        <Route path="/Presale/Presale2/Form4" element={<Form4 />}></Route>
        <Route path="/Utilitynetwork" element={<IconLabelTabs />}></Route>
        <Route component={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
