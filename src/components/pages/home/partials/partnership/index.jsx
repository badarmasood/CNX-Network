import React from "react";
import { Container, Grid } from "@mui/material";
import DecoThumb from "../../../../../assets/partnership-deco.png";
import "./index.scss";

import Visa from "../../../../../assets/VISA.png";
import Mastercard from "../../../../../assets/Mastercard.png";
import Bank from "../../../../../assets/Bank.png";

import Bloomberg from "../../../../../assets/bloomberg.jpeg";
import Marketwatch from "../../../../../assets/Marketwatch.jpeg";
import Benzinga from "../../../../../assets/Benzinga.png";
import Nasdaq from "../../../../../assets/nasdaq.jpeg";
import Sigmaworx from "../../../../../assets/Sigmaworx.jpeg";
import YahooF from "../../../../../assets/yahooF.jpeg";
import YahooN from "../../../../../assets/yahooN.jpeg";

import Binance from "../../../../../assets/Binance.png";
export default function Partnership() {
  return (
    <div className="partnership">
      <img src={DecoThumb} className="deco" alt="" />
      <Container>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          PARTNERSHIPS
        </h2>
        <p className="section-tagline" data-aos="fade-up" data-aos-delay="100">
          With great things you need a great team. This is our team for succes.
        </p>
        <div
          className="partnership-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="content-wrapper">
            <Grid container>
              <Grid item xs={12} md={4}>
                <div className="content">
                  <h3>Official Partner</h3>
                  <div class="d-flex flex-wrap justify-content-center my-4">
                    <img
                      src={Visa}
                      class="m-2"
                      alt="W3Schools.com"
                      width={"28%"}
                    ></img>
                    <img
                      src={Mastercard}
                      class="m-2"
                      alt="W3Schools.com"
                      width={"28%"}
                    ></img>
                    <img
                      src={Bank}
                      class="my-2"
                      alt="W3Schools.com"
                      width={"60%"}
                    ></img>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="content">
                  <h3>Marketing Partner</h3>
                  <div class="d-flex flex-wrap justify-content-center my-4">
                    <img
                      src={Sigmaworx}
                      class="m-2"
                      alt="W3Schools.com"
                      width={"85%"}
                    ></img>
                    <img
                      src={YahooN}
                      class="m-2"
                      alt="W3Schools.com"
                      width={"20%"}
                      // height={"20%"}
                    ></img>
                    <img
                      src={Bloomberg}
                      class="m-2"
                      alt="W3Schools.com"
                      width={"25%"}
                    ></img>
                    <img
                      src={Benzinga}
                      class="m-2"
                      alt="W3Schools.com"
                      width={"30%"}
                    ></img>

                    <img
                      src={Marketwatch}
                      class="m-2"
                      alt="W3Schools.com"
                      width={"40%"}
                    ></img>
                    <img
                      src={YahooF}
                      class="m-2"
                      alt="W3Schools.com"
                      width={"20%"}
                    ></img>
                    <img
                      src={Nasdaq}
                      class="m-2"
                      alt="W3Schools.com"
                      width={"20%"}
                    ></img>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="content">
                  <h3>Listing Partner</h3>
                  <div class="d-flex flex-wrap justify-content-center my-4">
                    <img
                      src={Binance}
                      class="m-2 p-3"
                      alt="W3Schools.com"
                      width={"65%"}
                    ></img>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}
