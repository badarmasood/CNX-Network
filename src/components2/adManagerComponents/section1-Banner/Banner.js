import React from "react";
import BannnerText from "./BannerText";
import banner from "../../../assests2/images/manager/banner-shape-1.svg";
import banner1 from "../../../assests2/images/manager/banner-shape-2.svg";
import banner3 from "../../../assests2/images/manager/banner-mockup.png";
import "../../../assests2/css/manager.css";

// import banner from "../../../assets2/images/manager/banner-shape-1.svg";
// import banner1 from "../../../assets2/images/manager/banner-shape-2.svg";
// import banner3 from "../../../assets2/images/manager/banner-mockup.png";
// import "../../../assets2/css/manager.css";
const Banner = () => {
  return (
    <section className="banner-sec banner-manager">
      <div className="banner-shape">
        <img src={banner} alt="banner" />
        <img src={banner1} alt="banner" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-wraper">
              <BannnerText />
              <img
                src={banner3}
                alt=""
                className="img-fluid manager-banner-mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
