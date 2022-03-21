import PersonIcon from "@mui/icons-material/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

export default function Form2() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <div class="container ">
          <div class=" py-3 text-center">
            <h1 class="fw-bolder text-white">KYC</h1>
            <p class="lead text-white">
              Before receiving the assets, we need to do a KYC
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6 mx-auto ">
              <div class="bg-dark rounded-lg shadow-sm p-5 ">
                <form role="form">
                  <div class="form-group text-light ">
                    <label for="username" class="fs-4 my-4">
                      Choose Identification
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Passport"
                      required
                      class="form-control p-3"
                    />
                    <input
                      type="text"
                      name="username"
                      placeholder="Drivers Licence"
                      required
                      class="form-control p-3 my-3"
                    />
                  </div>

                  <div class="container">
                    <div class="row pb-5 mb-4 d-flex justify-content-center my-5 ">
                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0  ">
                        <h4 class="text-light border p-5 ">
                          Front side Passport
                        </h4>
                      </div>
                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0  ">
                        <h4 class="text-light border p-5 ">
                          Back side Passport
                        </h4>
                      </div>
                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0  ">
                        <h4 class="text-light border p-5 ">Selfie Photo</h4>
                      </div>
                    </div>
                  </div>

                  <Link to="/Presale/Presale2/Form3">
                    <div class="btn-toolbar justify-content-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-lg primary rounded-pill px-4 m-3  "
                      >
                        Continue
                      </button>
                    </div>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
