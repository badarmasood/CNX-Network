import React from "react";
import Header from "../partials/header";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { border, height } from "@mui/system";
// import Image from "../../images/logo.png";

import whitepaperPDf from "../../images/whitepaper.pdf";

import LiteVersionPDF from "../../images/CNXlitepaper.pdf";
const Whitepaper = () => {
  return (
    <>
      <Header />
      {/* <h1>Whitepaper</h1>
      <a href="/images/myw3schoolsimage.jpg" download></a>
      <a href="" download="Image.png">
        Download
      </a>
      <a
        href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        download
      >
        Click to download
      </a> */}
      <section>
        <div class="container">
          <div class=" py-3" data-aos="fade-up">
            <h3 class="text-white" data-aos="fade-up" data-aos-delay="200">
              Become an investor. The pre-sale is live.
            </h3>
            <p class="text-white" data-aos="fade-up" data-aos-delay="250">
              Buy CoinX in its presale fase. This is the cheapest amount we will
              sell it for. With the money of the pre-sale we will start
              expanding our Utility Network, CEX listings and other things to
              become the biggest.
            </p>
          </div>

          <div class="d-flex flex-row">
            <a
              href={whitepaperPDf}
              download="Whitepaper.pdf"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                class="card bg-dark "
                style={{
                  width: "15rem",
                  height: "10rem",
                  border: "1px solid white",
                }}
              >
                <div class="card-body d-flex align-items-center">
                  <div
                    class=" text-center py-4 "
                    // width="100"
                  >
                    <h3 style={{ color: "white", fontWeight: "500" }}>
                      Download
                    </h3>
                    <h2
                      class=" my-2"
                      style={{ color: "white", fontWeight: "500" }}
                    >
                      White paper
                    </h2>
                    <FileDownloadIcon
                      style={{ color: "white", fontWeight: "500" }}
                    />
                  </div>{" "}
                </div>
              </div>
            </a>
            <a
              href={LiteVersionPDF}
              download="Liteversion.pdf"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div
                class="card bg-dark mx-4"
                style={{
                  width: "15rem",
                  height: "10rem",
                  border: "1px solid white",
                }}
              >
                <div class="card-body d-flex align-items-center">
                  <div
                    class=" text-center py-4 "
                    // width="100"
                  >
                    <h3 style={{ color: "white", fontWeight: "500" }}>
                      Download
                    </h3>
                    <h2
                      class=" my-2"
                      style={{ color: "white", fontWeight: "500" }}
                    >
                      Lite Version
                    </h2>
                    <FileDownloadIcon
                      style={{ color: "white", fontWeight: "500" }}
                    />
                  </div>{" "}
                </div>
              </div>
            </a>
          </div>
          {/* <i class="fa fa-download" aria-hidden="true"></i> */}
        </div>
      </section>
    </>
  );
};

export default Whitepaper;
