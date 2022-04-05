import React from "react";
import { Container, Grid } from "@mui/material";
import {
  Room,
  Facebook,
  Instagram,
  Telegram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Logo from "../../../assets/footer-logo.png";
import GooglePlay from "../../../assets/google-play.png";
import AppStore from "../../../assets/app-store.png";
import "./index.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="logo-box" data-aos="fade-up" data-aos-delay="100">
          <img src={Logo} alt="cnx-network" />
          <h2>CNX Utility Network</h2>
        </div>
        <div className="address-box" data-aos="fade-up" data-aos-delay="100">
          <Room />
          <h4>CNX-Network NV</h4>
          <p>letsch Inc.</p>
          <p>Laan van Nieuw-Oost-Indie 125</p>
          <p>2571HD</p>
        </div>
        <div className="footer-bottom">
          <Grid container>
            <Grid item xs={12} md={4}>
              <div
                className="copyright"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>CNX-Network 2022 © All right reserved</h3>
                <div className="terms">
                  <span>Terms & Conditions</span>
                  <span>Privacy Policy</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <ul className="social" data-aos="fade-up" data-aos-delay="100">
                <li>
                  <Facebook fontSize="large" />
                </li>
                <li>
                  <Instagram fontSize="large" />
                </li>
                <li>
                  <Telegram fontSize="large" />
                </li>
                <li>
                  <LinkedIn fontSize="large" />
                </li>
                <li>
                  <Twitter fontSize="large" />
                </li>
                <li>
                  <YouTube fontSize="large" />
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="app" data-aos="fade-up" data-aos-delay="100">
                <h3>Available on:</h3>
                <span>
                  <img src={GooglePlay} alt="cnx-network" />
                </span>
                <span>
                  <img src={AppStore} alt="cnx-network" />
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </footer>
  );
}
