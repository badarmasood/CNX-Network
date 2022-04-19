import React, { useState } from "react";
import "../../assests2/css/presale.css";
import axios from "axios";
const Presale = () => {
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    const res = axios
      .post("https://85.214.122.140:3001/v1/userEmail/", {
        email: email,
      })
      .then((response) => response.data);
  };
  return (
    <section className="presale-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="presale-inner">
              <h1>The pre-sale starts on 30-04-2022</h1>
              <h3>
                Don’t want to miss the pre-sale date? Enter your email and we
                will get you up-to-date with pre-sale launch and temporary
                actions.
              </h3>
              <div className="presale-email-wrap">
                <h5>Keep me up with the release date and presale actions!</h5>
                <form action="">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <button className="btn_submit" onClick={onSubmit}>
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presale;
