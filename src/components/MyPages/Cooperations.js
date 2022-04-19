import React from "react";
import Header from "../partials/header";
const Cooperations = () => {
  return (
    <>
      <Header />

      <section>
        <div class="container">
          <div class=" py-3" data-aos="fade-up" data-aos-delay="100">
            <h2 class="text-white">
              {" "}
              <b>Cooperations</b>
            </h2>

            <p class="text-white">
              <b>
                Do you have a good business plan that fits the CNX-Network? Tell
                us more about your projects and we might invest in your ideas.
              </b>{" "}
            </p>
          </div>
          <div class="row w-100" data-aos="fade-up">
            <div class="col-md-12  " data-aos="fade-up" data-aos-delay="350">
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
                      Cooperations Form
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
                        <div class="name">Company Name</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                            placeholder="Enter your street name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Company Website</div>
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
                            <b> Terms and Conditions</b>
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
                    <button class="btn btn-primary" type="submit">
                      Sign & Save
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

export default Cooperations;
