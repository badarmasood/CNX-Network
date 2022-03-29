import React from "react";
import { Container, Grid } from "@mui/material";
import Thumb from "../../../../../assets/cooperation.png";
import DecoThumb from "../../../../../assets/cooperation-deco.png";
import "./index.scss";

export default function Cooperation() {
  return (
    <div className="co-operation">
    <img src={DecoThumb} className="deco" alt="" />
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <div className="content">
              <h2
                className="section-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                CO-OPERATIONS
              </h2>
              <h4 data-aos="fade-up" data-aos-delay="100">
                ARE YOU LOOKING FOR A PARTNERSHIP WITH CNX-NETWORK?
              </h4>
              <p data-aos="fade-up" data-aos-delay="100">
                We are looking to work with people and companies that are
                interested in helping expanding the CNX-Utility Network.
              </p>
              <button data-aos="fade-up" data-aos-delay="100">
                CONTACT US
              </button>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="thumb-wrapper">
              <div
                className="thumbnail"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={Thumb} alt="co-operate" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
