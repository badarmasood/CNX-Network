import React from "react";

import { Link } from "react-router-dom";
import Header from "../../../partials/header";
import Visa from "../../../../images/visa.png";
import "./investment.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const PresalepaymentSuccessfull = () => {
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
                <Link to="/Receipt">
                  <button type="button" class="btn btn-secondary">
                    Download Receipt
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
                      Payment Successfull
                    </h3>
                    <div style={{ padding: "14px 50px" }}>
                      <p class="text-dark my-3">Thank you for purchasing!</p>
                      <p class="text-dark my-3">
                        Please check your email with the instructions to acces
                        your coins. Not received a mail? It can take up to 24
                        hours. If you did not receive your email then please
                        contact us on support@cnxnetwork.com and we will help
                        you.
                      </p>
                      <p class="text-dark my-3">Download your receipt</p>
                      <p class="text-dark my-3">
                        In the box under your package you can download your
                        receipt. We advice you to download this receipt in case
                        something goes wrong.
                      </p>
                      <p class="text-dark my-3">ORDERNUMBER: 10289373781991</p>
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

const paymentSuccessfull = () => {
  return (
    <>
      <Header />
      <PresalepaymentSuccessfull />
    </>
  );
};
export default paymentSuccessfull;
