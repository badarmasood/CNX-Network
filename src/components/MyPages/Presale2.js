import React from "react";
// import Navbar from "../navbar";
// import IconLabelTabs from "../Tabs";
// import Table from "../images/InevestmentTable.png";
// import FormPage from "../FormPageKYC";

import { Link } from "react-router-dom";
import Header from "../partials/header";

const Presale2 = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "black",
          height: "100%",
          padding: ".6rem",
        }}
      >
        <div class="container py-5 text-center">
          <div class="container ">
            <h1 class="text-white">
              <b>Choose your amount you want to Invest</b>
            </h1>
            <p class=" text-white py-3" style={{ fontSize: 18 }}>
              After purchasing you will receive the instructions with how to get
              your assets in WalletX
            </p>
          </div>
          <div class="d-flex flex-row justify-content-center row">
            <div class="d-flex  align-items-center  mx-3 my-3 ">
              <div
                class="card  py-4 px-5"
                style={{
                  width: "15rem",
                  height: "5rem",
                  backgroundColor: "#191A19",
                }}
              >
                <div class="card-body d-flex align-items-center justify-content-center  ">
                  <h3 class="card-title  ">
                    <b>Back to Packages</b>
                  </h3>
                </div>
              </div>
            </div>

            <div class="d-flex flex-row justify-content-center mx-3 my-3">
              <div
                class="card"
                style={{
                  width: "18rem",
                  height: "9rem",
                  backgroundColor: "#191A19",
                }}
              >
                <div class="card-body d-flex align-items-center justify-content-center">
                  <h1 class="card-title ">$ 0.00</h1>
                </div>
              </div>
            </div>
          </div>
          <Link to="/Presale/Presale2/Form1">
            <div class=" d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-primary  px-5 my-3 py-1 "
                style={{ fontSize: 18, borderRadius: 15 }}
              >
                Continue
              </button>
            </div>
          </Link>

          <div class="container">
            <div class="row pb-5 mb-4 d-flex justify-content-center my-5 ">
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}

                <div class=" shadow-sm">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light  MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}

                <div class=" shadow-sm">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light  MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}

                <div class=" shadow-sm">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}

                <div class=" shadow-sm">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border border-light  MyBorderPresale  "></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Card--> */}

                <div class=" shadow-sm">
                  <div class="card-body p-0 d-flex justify-content-center ">
                    <div class="border MyBorderPresale  "></div>
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

export default Presale2;
