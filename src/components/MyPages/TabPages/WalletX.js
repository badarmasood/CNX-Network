import React from "react";

import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import Footer from "../../partials/footer";
import WalletXImg from "../../../images/WalletX.png";

const WalletX = () => {
  return (
    <>
      <section>
        <div
          class=" bg-image d-flex justify-content-center "
          style={{
            backgroundImage: `url(${WalletXImg})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // position: "relative",
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
                  WalletX
                </h1>
                <p
                  class="lead text-dark"
                  style={{
                    fontWeight: "normal",
                    fontSize: "1.5rem",
                  }}
                >
                  Trade the future
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
      {/* <header class="WalletX">
        <div class="container h-100 mt-5">
          <div class="row h-100 ">
            <div class="col-12 text-center upper-img ">
              <h1 class="fw-bolder text-dark">WalletX</h1>
              <p class="lead text-dark">Trade the future </p>
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
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
};

export default WalletX;
