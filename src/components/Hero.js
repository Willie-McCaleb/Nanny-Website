import React from "react";
import "./Hero.css";

function Hero() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    const HeroMsg = document.getElementById("HeroMsg");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbw2NugtQC8m2Y81hJhKzsqGr0_ofKBGIZa57ebCTTREYQO3TjrI_44DKfKr6yuG5L4s/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        HeroMsg.innerHTML = "Welcome to the Newsletter!";
        setTimeout(function () {
          HeroMsg.innerHTML = "";
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
    <>
      <div className="hero">
        <div className="sign-up">
          <form className="form" onSubmit={(e) => Submit(e)}>
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
              type="text"
              name="Email"
              placeholder="Enter Your Email..."
              required
            />
            <button type="submit">SUBSCRIBE</button>
            <span id="HeroMsg"></span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
