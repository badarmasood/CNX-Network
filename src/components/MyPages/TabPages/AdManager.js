import React from "react";

import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import Footer from "../../partials/footer";

import LaptopImg from "../../../images/Laptop1.png";

const AdManager = () => {
  return (
    <>
      <section>
        <div
          class=" bg-image d-flex justify-content-center "
          style={{
            backgroundImage: `url(${LaptopImg})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
                  AdManager
                </h1>
                <p
                  class="text-dark"
                  style={{
                    fontWeight: "normal",
                    fontSize: "1.5rem",
                  }}
                >
                  Advertising has never been easier before
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
      {/* <header class="container adManager">
        <div class=" h-100 mt-5 ">
          <div class="row h-100 ">
            <div class="col-12 text-center upper-img ">
              <h1 class="fw-bolder text-dark">AdManager</h1>
              <p class="lead text-dark">
                Advertising has never been easier before
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
      </header> */}

      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
};

export default AdManager;
