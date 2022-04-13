import React from "react";
// import Navbar from "../navbar";
// import IconLabelTabs from "../Tabs";

// import Table from "../images/InevestmentTable.png";
import Table from "../../images/InevestmentTable.png";

// import FormPage from "../FormPageKYC";

import { Link } from "react-router-dom";
import Header from "../partials/header";

const Presale1 = () => {
  return (
    <>
      <section>
        <div class="container">
          <div class=" py-3  ">
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
            <div class="col-md-3">
              <Link to="/Investment">
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
                    Custom price Investment
                  </button>
                </Link>
              </div>
            </div>

            <div class="col-md-3">
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
            </div>
            <div class="col-md-3">
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
            </div>
            <div class="col-md-3">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Presale = () => {
  return (
    <>
      <Header />
      <Presale1 />
    </>
  );
};
//  const Presale1 = () => {
//   return (
//     <>
// <div
//   style={{
//     backgroundColor: "black",
//     height: "100vh",
//   }}
//   // class="jumbotron bg-cover text-white"
// >
//   <div class="container py-5 text-center">
//     <h1 class="fw-bolder text-white">
//       Become an Investor. The Presale is live.
//     </h1>
//     {/* <a href="#" role="button" class="btn btn-primary px-5">
//             See All Features
//           </a> */}
// <div class="btn-toolbar justify-content-center my-4">
//   <Link to="/Presale/Presale2">
//     <button
//       type="button"
//       class="btn btn-primary btn-lg primary rounded-pill px-5 mx-3 py-3 "
//     >
//       Invest Now
//     </button>
//   </Link>
// </div>

//     {/* <h2 class="fw-bolder text-white d-flex flex-start">
//             Investment rewards
//           </h2> */}
//     <div
//       class="col-lg-12 d-flex justify-content-center my-5"
//       data-aos="zoom-out"
//       data-aos-delay="200"
//     >
//       <img src={Table} class="img-fluid" alt="W3Schools.com"></img>
//       {/* <img src="./images" class="img-fluid" alt="" /> */}
//     </div>
//   </div>
// </div>;
//      </>
//    );
//  };
export default Presale;
