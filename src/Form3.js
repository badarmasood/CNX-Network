import PersonIcon from "@mui/icons-material/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
export default function Form3() {
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
          <div class=" col-12 py-5 text-center">
            <h1 class="fw-bolder text-white">Payment</h1>
            <p class="lead text-white">
              After the payment you will receive an wmail with the login details
              for WalletX. There you can see your coins you have bought during
              the presale.
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
                      placeholder="Creditcard"
                      required
                      class="form-control p-3"
                    />
                    <input
                      type="text"
                      name="username"
                      placeholder="Paypal"
                      required
                      class="form-control p-3 my-3"
                    />
                    <input
                      type="text"
                      name="username"
                      placeholder="Pay in Bitcoin"
                      required
                      class="form-control p-3 my-3"
                    />
                  </div>
                  <Link to="/Presale/Presale2/Form4">
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
