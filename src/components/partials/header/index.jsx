import React, { useState } from "react";
import { Container } from "@mui/material";
import Logo from "../../../assets/logo.png";
import "./index.scss";

import { NavLink } from "react-router-dom";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);
  const HandleSidebarBarChange = (e) => {
    setSideBar(!sideBar);
  };
  return (
    <header className="FixNav">
      <Container>
        <div className="content ">
          <div className="logo-box">
            <img src={Logo} alt="CNX-Network" />
            <span>CNX-Network</span>
          </div>
          <ul
            class="navbar"
            className={
              sideBar ? "header-menu header-menu-active" : "header-menu"
            }
          >
            <li class="nav-item">
              <NavLink class="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/Whitepaper">
                Whitepaper
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/Blockchain">
                Blockchain
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/Team">
                Team
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link " to="/Presale">
                Pre-sale
              </NavLink>
            </li>
            <li className="btn">
              <NavLink class="nav-link " to="/Utilitynetwork">
                Utility Network
              </NavLink>
            </li>
          </ul>
          <div className="toggle-box">
            <button
              className="toggle-button"
              onClick={(e) => HandleSidebarBarChange(e)}
            >
              <span className={sideBar ? "line1-change" : "line1"}></span>
              <span className={sideBar ? "line2-change" : "line2"}></span>
              <span className={sideBar ? "line3-change" : "line3"}></span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
