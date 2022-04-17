import React from "react";

import { Link } from "react-router-dom";
import Header from "../../../partials/header";
import "./investment.css";
const PresaleReceipt = () => {
  return (
    <>
      <section>
        <div class="container  ">
          <div class=" py-3 my-3  d-flex justify-content-center ">
            <h2 class="text-white  ">Receipt</h2>
          </div>
          <div class=" d-flex justify-content-center">
            <div class="">
              <div class=" col-md-12  ">
                <div class=" bg-dark ">
                  <div class="card card-6">
                    <div class="card-body">
                      <div
                        class="card-header bg-transparent  "
                        style={{
                          border: "none",
                          color: "black",
                        }}
                      >
                        <h3
                          style={{
                            color: "black",
                          }}
                        >
                          Receipt
                        </h3>
                      </div>

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
                                Please enter some information about yourself so
                                we can know more about you. According to law we
                                have to do a full KYC with costumers. After
                                buying the coins , you can collect them on
                                Wallet X Please enter some information about
                                yourseld so we can know more about you.
                                According to law we have to do a full KYC with
                                costumers. After buying the coins , you can
                                collect them on Wallet X
                              </textarea>
                            </div>
                            <p
                              class="text-dark "
                              style={{ paddingBottom: "30px" }}
                            >
                              package
                            </p>
                            <div class="col-md-4">
                              <div
                                class="card border-secondary border border-2 mb-3 bg-dark p-3"
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

                                <div
                                  class="card-body text-success bg-transparent "
                                  style={{
                                    border: "none",
                                  }}
                                >
                                  <h5 class="card-title ">Pack 1:</h5>
                                  <p class="card-text ">
                                    Free VPN for life time
                                  </p>
                                  <p class="card-text ">+10% for CNX-Miners</p>
                                </div>
                                <div
                                  class=" bg-transparent "
                                  style={{
                                    border: "none",
                                  }}
                                >
                                  12.500 CNX
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
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

const Receipt = () => {
  return (
    <>
      <Header />
      <PresaleReceipt />
    </>
  );
};
export default Receipt;
