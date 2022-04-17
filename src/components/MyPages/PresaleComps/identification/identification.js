import React from "react";

import { Link } from "react-router-dom";
import Header from "../../../partials/header";
import "./investment.css";
const PresaleIdentification = () => {
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
                class="card border-secondary border-2 mb-3 bg-dark"
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
                  $ 100,-
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
                  <button type="button" class="btn btn-secondary w-100  p-0">
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
                      Identification
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
                        <div class="name">Passport Frontside</div>
                        <div class="value">
                          <div class="input-group js-input-file d-flex align-items-center ">
                            <input
                              class="input-file"
                              type="file"
                              name="file_cv"
                              id="file"
                            />
                            <label class="label--file" for="file">
                              Upload file +
                            </label>
                            <span class="input-file__info">
                              1 file(s) Uploaded
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Passport Backside</div>
                        <div class="value">
                          <div class="input-group js-input-file d-flex align-items-center ">
                            <input
                              class="input-file"
                              type="file"
                              name="file_cv"
                              id="file"
                            />
                            <label class="label--file" for="file">
                              Upload file +
                            </label>
                            <span class="input-file__info">
                              0 file(s) Uploaded
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Selfie</div>
                        <div class="value">
                          <div class="input-group js-input-file d-flex align-items-center ">
                            <input
                              class="input-file"
                              type="file"
                              name="file_cv"
                              id="file"
                            />
                            <label class=" label--file" for="file">
                              Upload file +
                            </label>
                            <span class="input-file__info">
                              0 file(s) Uploaded
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer d-flex justify-content-end">
                    <Link to="/Payment">
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

const Identification = () => {
  return (
    <>
      <Header />
      <PresaleIdentification />
    </>
  );
};
export default Identification;
