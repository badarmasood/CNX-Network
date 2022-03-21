import PersonIcon from "@mui/icons-material/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
export default function Form1() {
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
          <div class=" py-5 text-center">
            <h1 class="fw-bolder text-white">KYC</h1>
            <p class="lead text-white">
              Before receiving the assets, we need to do a KYC
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6 mx-auto ">
              <div class="bg-dark rounded-lg shadow-sm p-5 ">
                <div class="  text-center">
                  <h2 class="fw-medium text-white mb-5">Account details</h2>
                </div>

                <form role="form">
                  <div class="form-group text-light ">
                    <label for="username" class="fs-4 ">
                      {/* {" "}
                          <span>
                            <FontAwesomeIcon
                              icon={PersonIcon}
                              size="2x"
                              color="white"
                            />
                          </span> */}
                      Full name
                    </label>

                    <hr />
                    <label for="username" class="fs-4 ">
                      Date of Birth{" "}
                    </label>

                    <hr />
                    <label for="username" class="fs-4 ">
                      Email
                    </label>
                    <hr />
                    <label for="username" class="fs-4 ">
                      Email Confirmation{" "}
                    </label>
                    <hr />
                    <label for="username" class="fs-4 ">
                      Address + Zipcode
                    </label>
                    <hr />
                    <label for="username" class="fs-4 ">
                      Landline
                    </label>
                    <hr />
                  </div>

                  <Link to="/Presale/Presale2/Form2">
                    <div class="btn-toolbar justify-content-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-lg primary rounded-pill px-4 mx-3  "
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
