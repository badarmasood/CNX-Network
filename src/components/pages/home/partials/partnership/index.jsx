import React from "react";
import { Container, Grid } from "@mui/material";
import DecoThumb from "../../../../../assets/partnership-deco.png";
import "./index.scss";

export default function Partnership() {
  return (
    <div className="partnership">
    <img src={DecoThumb} className="deco" alt="" />
      <Container>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">PARTNERSHIPS</h2>
        <p className="section-tagline" data-aos="fade-up" data-aos-delay="100">
          With great things you need a great team. This is our team for succes.
        </p>
        <div className="partnership-card" data-aos="fade-up" data-aos-delay="100">
          <div className="content-wrapper">
            <Grid container>
              <Grid item xs={12} md={4}>
                  <div className="content">
                      <h3>Official Partner</h3>
                  </div>
              </Grid>
              <Grid item xs={12} md={4}>
                  <div className="content">
                      <h3>Marketing Partner</h3>
                  </div>
              </Grid>
              <Grid item xs={12} md={4}>
                  <div className="content">
                      <h3>Listing Partner</h3>
                  </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}
