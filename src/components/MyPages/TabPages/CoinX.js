import React from "react";

import SectionThree from "./Sections/SectionThree";
import Footer from "../../partials/footer";
import GoldCoinX from "../../../images/GoldCoinX.png";
import CoinXImg from "../../../images/CoinX.png";

const CoinX = () => {
  return (
    <>
      <section>
        <div
          class=" bg-image d-flex justify-content-center "
          style={{
            backgroundImage: `url(${CoinXImg})`,
            height: "100vh",
            marginBottom: "2rem",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <div class=" mt-5 ">
            <div class="row ">
              <div class="col-lg-12 text-center ">
                <h1
                  class="fw-bolder text-dark"
                  style={{
                    fontWeight: "bold",
                    fontSize: "5rem",
                  }}
                >
                  CoinX
                </h1>
                <p
                  class="text-dark"
                  style={{
                    fontWeight: "normal",
                    fontSize: "1.5rem",
                  }}
                >
                  The Future of Crypto
                </p>
                <div class="btn-toolbar justify-content-center">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg primary rounded-pill px-4 mx-3  "
                  >
                    Download Now
                  </button>
                  <button
                    type="button"
                    class="btn btn-light  btn-lg rounded-pill px-4  mx-3"
                  >
                    More information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <header class="CoinX">
        <div class="container h-100 mt-5">
          <div class="row h-100 ">
            <div class="col-12 text-center upper-img ">
              <h1 class="fw-bolder text-dark">CoinX</h1>
              <p class="lead text-dark">The Future of Crypto. </p>
              <div class="btn-toolbar justify-content-center">
                <button
                  type="button"
                  class="btn btn-primary btn-lg primary rounded-pill px-4 mx-3  "
                >
                  Download Now
                </button>
                <button
                  type="button"
                  class="btn btn-light  btn-lg rounded-pill px-4  mx-3"
                >
                  More information
                </button>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <section class="bg-black py-5">
        <div class="container " data-aos="fade-up">
          <div class="row gx-0 px-5 my-5 ">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="content">
                <h1
                  class="fw-bolder text-white display-2 my-2 "
                  style={{
                    fontWeight: "bold",
                    fontSize: "6rem",
                  }}
                >
                  The 24K CNX Golden CoinX
                </h1>
                <p class="lead fw-normal text-white my-3">
                  Invest enough in the CNX-Network and receive this limited
                  coin.
                </p>
                <div class="d-grid gap-3 d-flex justify-content-sm-center justify-content-xl-start align-items-center my-5">
                  <button
                    class="btn  btn-style2 btn-style-border border-primary  justify-content-sm-center "
                    type="submit"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 d-flex justify-content-center  "
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={GoldCoinX} class="img-fluid" alt="W3Schools.com"></img>
              {/* <img src="./images" class="img-fluid" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
      <SectionThree />
      <Footer />
    </>
  );
};

export default CoinX;
