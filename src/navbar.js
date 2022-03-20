import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconLabelTabs from "./Tabs";
import Whitepaper from "./pages/Whitepaper";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showTabs, setShowTabs] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg  ">
          <div class="container">
            <a class="navbar-brand" href="#">
              CNX-Network
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
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
                  <NavLink class="nav-link" to="/Presale">
                    Pre-sale
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
                <Button
                  className="btn btn-style "
                  type="submit"
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={(e) => e.onchange(setShowTabs(true))}
                >
                  Utility Network
                </Button>

                {/* <Button
                  variant="outlined"
                  endIcon={<SendIcon />}
                  onClick={(e) => e.onchange(setShowTabs(true))}
                >
                  Send
                </Button> */}
              </form>
            </div>
          </div>
        </nav>
        {/* {showTabs && <IconLabelTabs />} */}
      </section>
    </>
  );
};

export default Navbar;
