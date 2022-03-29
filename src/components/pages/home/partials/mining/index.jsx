import React from "react";
import { Container, Grid } from "@mui/material";
import Countdown from "react-countdown";
import Thumb from "../../../../../assets/mining-timer.png";
import "./index.scss";

export default function MiningStartup() {
  const miningtime = Date.now() + 345600000;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>0d 0H 0M 0S</span>;
    } else {
      return (
        <span>
          {days}d {hours}H {minutes}M {seconds}S
        </span>
      );
    }
  };
  return (
    <div className="mining-startup">
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <div className="content">
              <h1 data-aos="fade-up" data-aos-delay="100">First Mining ICO Token Start Up</h1>
              <p data-aos="fade-up" data-aos-delay="100">
                Regarded as a synonym to cryptocurrency, blockchain is much more
                than a payment option
              </p>
              <div className="btn-wrapper">
                <button data-aos="fade-up" data-aos-delay="100">PRE-SALE</button>
                <button data-aos="fade-up" data-aos-delay="100">WHITE PAPER</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5} data-aos="fade-left">
            <div className="thumb-wrapper">
              <div className="thumbnail" data-aos="fade-up" data-aos-delay="100">
                <img src={Thumb} alt="timer" />
                <Countdown date={miningtime} renderer={renderer} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
