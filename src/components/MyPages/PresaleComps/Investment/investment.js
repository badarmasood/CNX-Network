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
            <div class="col-md-4">
              <Link to="">
                <div
                  class="card border-secondary border border-2 mb-3 bg-dark"
                  style={{
                    maxWidth: "18rem",
                    minHeight: "300px",
                    position: "relative",
                  }}
                >
                  <h1
                    class="card-header bg-transparent  "
                    style={{
                      border: "none",
                    }}
                  >
                    $ 100,-
                  </h1>

                  <div class="card-body text-success">
                    <h5 class="card-title ">Pack 1:</h5>
                    <p class="card-text ">Free VPN for life time</p>
                    <p class="card-text ">+10% for CNX-Miners</p>
                  </div>
                  <div
                    class="card-footer bg-transparent "
                    style={{
                      border: "none",
                    }}
                  >
                    12.500 CNX
                  </div>
                </div>
              </Link>
              <div class="btn-toolbar my-4">
                <Link to="/Presale/Presale2">
                  <button type="button" class="btn btn-secondary">
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
                        Please enter some information about yourseld so we can
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
                              id="form4Example3"
                              rows="6"
                              placeholder="Message sent to the employer"
                            ></textarea>
                            <label class="form-label" for="form4Example3">
                              Message
                            </label>
                          </div>
                        </div>
                        {/* <div class="name">Message</div>
                        <div class="value">
                          <div class="input-group">
                            <textarea
                              class="textarea--style-6"
                              name="message"
                              placeholder="Message sent to the employer"
                            ></textarea>
                          </div>
                        </div> */}
                      </div>
                    </form>
                  </div>
                  <div class="card-footer d-flex justify-content-end">
                    <button class="btn btn-primary" type="submit">
                      Continue
                    </button>
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
