import React from "react";
import "./Footer.css";

function Footer(props) {
  function Submit(e) {
    const formEle = document.querySelector("#form2");
    e.preventDefault();
    const msg = document.getElementById("msg");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbw2NugtQC8m2Y81hJhKzsqGr0_ofKBGIZa57ebCTTREYQO3TjrI_44DKfKr6yuG5L4s/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        msg.innerHTML = "Welcome to the Newsletter!";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        formEle.reset();
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="footer">
      <div className="row">
        {/* Column 1 */}
        {/* Set up to send to a google spread sheet */}
        <div className="col">
          <div className="sign-up">
            <form id="form2" onSubmit={(e) => Submit(e)}>
              <h4>Stay up to date with the latest!</h4>

              <input
                className="name_input"
                type="text"
                name="Name"
                placeholder="Enter First Name... "
                required
              />

              <input
                className="email_input"
                type="email"
                name="Email"
                placeholder="Enter Your Email..."
                required
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <span id="msg"></span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col2">
          <a
            href="https://m.facebook.com/NannyNetworkNY/?mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook" />
          </a>

          <a
            href="https://instagram.com/nannynetwork_ny?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram" />
          </a>

          <a href="/" target="_blank" rel="noreferrer" className="pinterest">
            <i className="fa-brands fa-pinterest" />
          </a>
        </div>
      </div>

      <div className="row2">
        <p className={props.cName}>
          &copy;{new Date().getFullYear()} WillWebs | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
