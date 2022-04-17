import React from "react";

import { Link } from "react-router-dom";
import Header from "../../../partials/header";
import "./investment.css";
const PresaleInvestment = () => {
  return (
    <>
      <section>
        <div class="container">
          <div class=" py-3 ">
            <h3 class="text-white">
              Become an investor. The pre-sale is live.
            </h3>
            <p class="text-white">
              Buy CoinX in its presale fase. This is the cheapest amount we will
              sell it for. With the money of the pre-sale we will start
              expanding our Utility Network, CEX listings and other things to
              become the biggest.
            </p>
          </div>
          <div class="row w-100">
            <div class="col-lg-4 col-md-6">
              <div
                class="card border-secondary border-2  bg-dark"
                style={{
                  maxWidth: "auto",

                  minHeight: "250px",
                  position: "relative",
                }}
              >
                <h1
                  class="card-header bg-transparent  "
                  style={{
                    border: "none",
                  }}
                >
                  <b>$ 100,-</b>
                </h1>

                <div class="card-body text-success">
                  <h5 class="card-title ">
                    <b>Pack 1:</b>
                  </h5>
                  <p class="card-text py-1">
                    <b>Free VPN for life time</b>
                  </p>
                  <p class="card-text py-1">
                    <b>+10% for CNX-Miners</b>
                  </p>
                </div>
                <div
                  class="card-footer bg-transparent "
                  style={{
                    border: "none",
                  }}
                >
                  <span class="  d-flex justify-content-between">
                    <p>
                      <b>12.500 CNX</b>
                    </p>
                  </span>
                </div>
              </div>

              <div class=" my-4">
                <Link to="">
                  <button type="button" class="btn btn-secondary w-100  p-0 ">
                    Back
                  </button>
                </Link>
              </div>
            </div>
            <div class="col-md-8 ">
              <div class=" bg-dark">
                <div class="card card-6">
                  <div class="card-body">
                    <h3
                      class="card-header bg-transparent  "
                      style={{
                        border: "none",
                        color: "black",
                      }}
                    >
                      Investment Form
                    </h3>
                    <div style={{ padding: "24px 30px" }}>
                      <p class="text-dark">
                        Please enter some information about yourself so we can
                        know more about you. According to law we have to do a
                        full KYC with costumers. After buying the coins , you
                        can collect them on Wallet X
                      </p>
                    </div>
                    <form method="POST">
                      <div class="form-row">
                        <div class="name">First Name</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="Enter your first name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Last Name</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="Enter your Last name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Country</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="Country"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">City</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Address</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="Enter your street name"
                          />
                        </div>
                      </div>
                      <div class="">
                        <div style={{ padding: "24px 30px" }}>
                          <p
                            class="text-dark "
                            style={{ paddingBottom: "30px" }}
                          >
                            Terms and Conditions
                          </p>
                          <div class="form-outline mb-4">
                            <textarea
                              class="form-control"
                              rows="6"
                              // placeholder="Message sent to the employer"
                            >
                              Please enter some information about yourself so we
                              can know more about you. According to law we have
                              to do a full KYC with costumers. After buying the
                              coins , you can collect them on Wallet X Please
                              enter some information about yourseld so we can
                              know more about you. According to law we have to
                              do a full KYC with costumers. After buying the
                              coins , you can collect them on Wallet X
                            </textarea>
                          </div>
                          <p
                            class="text-dark "
                            style={{ paddingBottom: "30px" }}
                          >
                            You have signed the Terms and Conditions
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    class="card-footer d-flex justify-content-end p-4"
                    style={{}}
                  >
                    <Link to="/Identification">
                      <button class="btn btn-primary" type="submit">
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Investment = () => {
  return (
    <>
      <Header />
      <PresaleInvestment />
    </>
  );
};
export default Investment;
