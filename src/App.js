import React from "react";
import { Route, Routes } from "react-router";

import Home from "./Home";
import Blockchain from "./pages/Blockchain";
import Team from "./pages/Team";
import Whitepaper from "./pages/Whitepaper";
import Presale from "./pages/Presale";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Blockchain" element={<Blockchain />}></Route>
        <Route path="/Team" element={<Team />}></Route>
        <Route path="/Whitepaper" element={<Whitepaper />}></Route>
        <Route path="/Presale" element={<Presale />}></Route>
        <Route component={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
