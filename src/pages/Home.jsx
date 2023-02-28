import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar
        logo="hero-logo"
        socials="social-media"
        navbar="navbar"
        container="container"
      >
        <Hero />
      </Navbar>
    </div>
  );
}

export default Home;
