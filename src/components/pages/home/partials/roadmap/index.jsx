import React from "react";
import { Container } from "@mui/material";
import {
  CheckCircleOutlineOutlined,
  AutorenewSharp,
} from "@mui/icons-material";
import Swiper from "react-id-swiper";
import DecoThumb from "../../../../../assets/roadmap-deco.png";
import "./index.scss";
export default function RoadMap() {
  const params = {
    slidesPerView: 1,
    breakpoints: {
      1194: { slidesPerView: 3 },
      991: { slidesPerView: 2 },
    },
    spaceBetween: 20,
    rebuildOnUpdate: true,
    freeMode: true,
  };
  const data = [
    {
      title: "completed",
      detail: [
        {
          title: "Q3-2020",
          points: [
            "Blockware Technology Development",
            "Security, strategic partners & investors",
          ],
        },
        {
          title: "Q4-2020",
          points: [
            "CNX-Network Development",
            "Mining app preparations",
            "Public launch",
          ],
        },
        {
          title: "Q1-2021",
          points: [
            "Node launch for private use",
            "Blockware 1.0 integration",
            "First utilities software",
          ],
        },
        {
          title: "Q2-2021",
          points: [
            "Network expansion",
            "Development team expansion",
            "Start on 6 utility applications",
          ],
        },
      ],
    },
    {
      title: "completed",
      detail: [
        {
          title: "Q3-2021",
          points: ["CoinX marketing strategy launch", "Mining app release"],
        },
        {
          title: "Q4-2021",
          points: [
            "100K+ users",
            "Public pre sale preparations",
            "Corporations expansion",
          ],
        },
        {
          title: "Q1-2022",
          points: [
            "Testing utility applications",
            "White paper release",
            "initial talks with high profile investors",
          ],
        },
        {
          title: "Q2-2022",
          points: [
            "Launch of the first utility applications",
            "Pre sale launch",
            "CEX Listings",
            "150K+ users",
          ],
        },
      ],
    },
    {
      title: "in progress",
      detail: [
        {
          title: "Q3-2022",
          points: [
            "Testing 25 utility applications",
            "Strategic partnership expansion",
            "Improving the infrastructure",
            "Further CEX Listings",
            "Utility Interface improvement",
            "Blockware payment integration",
            "Marketing strategy improvements",
            "Website V2 Launch",
            "CNX-Payment integration",
            "Send/recieve assets",
            "NFT Marketplace",
            "CNX Domain",
            "Start with the DeFi system",
            "Ending of the presale",
            "Testing mainnet",
          ],
        },
      ],
    },
  ];
  return (
    <div className="roadmap">
      <img src={DecoThumb} className="deco" alt="" />
      <Container>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          ROADMAP TO SUCCESS
        </h2>
        <p className="section-tagline" data-aos="fade-up" data-aos-delay="100">
          Grow. Grow. Grow. We go are growing fast with our Network.
        </p>
      </Container>
      <div style={{ padding: "0 16px" }}>
        <Swiper {...params} shouldSwiperUpdate>
          {data.map((item, index) => (
            <div
              className="card"
              data-aos="fade-up"
              data-aos-delay="100"
              key={index}
            >
              {index !== 0 && <span className="underline underline-1"></span>}
              {index !== 2 && <span className="underline underline-2"></span>}
              <span className="completed">{item.title}</span>
              {item.detail.map((subitem, subindex) => (
                <React.Fragment key={subindex}>
                  <h4>{subitem.title}</h4>
                  {subitem.points.map((pitem, pindex) => (
                    <li key={pindex}>
                      {item.title === "completed" ? (
                        <CheckCircleOutlineOutlined />
                      ) : (
                        <AutorenewSharp style={{ color: "#707070" }} />
                      )}
                      {pitem}
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
