import React from "react";

import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import Footer from "../../partials/footer";

import MetaChatImg from "../../../images/MetaChat.png";

const MetaChat = () => {
  return (
    <>
      <section>
        <div
          class=" bg-image d-flex justify-content-center "
          style={{
            backgroundImage: `url(${MetaChatImg})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            position: "relative",
          }}
        >
          <div class="container">
            <div class=" d-flex justify-content-center ">
              <div class="row my-2">
                <div
                  class="col "
                  style={{
                    position: "relative",
                  }}
                >
                  <h1
                    class="fw-bolder text-dark text-center"
                    style={{
                      fontWeight: "bold",
                      fontSize: "4rem",
                    }}
                  >
                    MetaChat
                  </h1>
                  <p
                    class="text-dark text-center  mb-2"
                    style={{
                      fontWeight: "normal",
                      fontSize: "1.5rem",
                    }}
                  >
                    Encrypted chat service for daily purposes
                  </p>
                  <div class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-primary primary rounded-pill px-4 mx-3  "
                    >
                      Download Now
                    </button>
                    <button
                      type="button"
                      class="btn btn-light MoreBtn btn-lg rounded-pill px-4  mx-3"
                    >
                      More information
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <header class="MetaChat">
        <div class="container h-100 mt-5">
          <div class="row h-100 ">
            <div class="col-12 text-center upper-img ">
              <h1 class="fw-bolder text-dark">MetaChat</h1>
              <p class="lead text-dark">
                Encrypted chat service for daily purposes{" "}
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

export default MetaChat;