import React from "react";
import Navbar from "../navbar";
import IconLabelTabs from "../Tabs";
import Table from "../images/InevestmentTable.png";
const Presale1 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
        }}
        // class="jumbotron bg-cover text-white"
      >
        <div class="container py-5 text-center">
          <h1 class="fw-bolder text-white">
            Become an Investor. The Presale is live.
          </h1>
          {/* <a href="#" role="button" class="btn btn-primary px-5">
            See All Features
          </a> */}
          <div class="btn-toolbar justify-content-center my-4">
            <button
              type="button"
              class="btn btn-primary btn-lg primary rounded-pill px-4 mx-3  "
            >
              Invest Now
            </button>
          </div>

          <div
            class="col-lg-12 d-flex justify-content-center my-4"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={Table} class="img-fluid" alt="W3Schools.com"></img>
            {/* <img src="./images" class="img-fluid" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};
const Presale2 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
        }}
        // class="jumbotron bg-cover text-white"
      >
        <div class="container py-5 text-center">
          <h1 class="fw-bolder text-white">
            Choose your amount you want to Invest
          </h1>
          <p class="lead text-white">
            After purchasing you will receive the instructions with how to get
            your assets in WalletX
          </p>

          <div class="d-flex flex-row justify-content-center">
            <div
              class="card"
              style={{
                width: "18rem",
                height: "9rem",
                backgroundColor: "white",
              }}
            >
              <div class="card-body d-flex align-items-center justify-content-center">
                <h1 class="card-title ">$ 0.00</h1>
              </div>
            </div>
          </div>
          <div class=" d-flex justify-content-center">
            <button type="button" class="btn btn-primary btn-lg mt-5">
              Continue
            </button>
          </div>

          <div class="container">
            <div class="row pb-5 mb-4 d-flex justify-content-center my-5 ">
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 1</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 2</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 3</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 4</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}
                <h5 style={{ color: "white" }}>Reward 5</h5>
                <div class=" shadow-sm border-0 rounded ">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light border-2 MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Presale = () => {
  return (
    <>
      <Navbar />
      <h1>Presale Page</h1>
      <Presale2 />
    </>
  );
};

export default Presale;
