import React from "react";
import { Container, Grid } from "@mui/material";
import DecoLeftThumb from "../../../../../assets/utlilities-deco-left.png";
import DecoRightThumb from "../../../../../assets/utlilities-deco-right.png";
import "./index.scss";

export default function Utilities() {
  const data = [
    {
      title: "All of your needs.",
      subline: "In one place.",
      description:
        "The first sustainable worldwide blockchain technology network, offering encrypted, interconnected and same interface applications that are used in daily life, running on its own blockchain and currency.",
    },
    {
      title: "Utility Applications.",
      subline: "For daily use.",
      description:
        "CNX builds platforms that are connected to the CNX-Network. We offer you in the beginning of theproject a range of 7 quintessential apps and the possibility of the network to expand beyond to 100 applications.",
    },
    {
      title: "Network of 200K users.",
      subline: "Already.",
      description:
        "Introducing the CNX-Miner app where we have gained over 200.000 users to start creating our community. With this community we will test out all of our applications and make them all a succes.",
    },
    {
      title: "We invest in our",
      subline: "community.",
      description:
        "We invite all companies and developers with great ideas related to the CNX-Network vision to apply for the CNX Investor program where we only introduce high-endproducts for our community.",
    },
  ];
  return (
    <div className="utilties">
      <img src={DecoLeftThumb} className="deco deco-left" alt="" />
      <img src={DecoRightThumb} className="deco deco-right" alt="" />
      <Container>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          Utilities
        </h2>
        {data && (
          <Grid container>
            {data.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className={
                    index === 2 || index === 3
                      ? "card-wrapper bottom"
                      : "card-wrapper"
                  }
                >
                  <div className="card " style={{ backgroundColor: "black" }}>
                    <div className="content">
                      <h3>
                        {item.title}
                        <br />
                        {item.subline}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}
