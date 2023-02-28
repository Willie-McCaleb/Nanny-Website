import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar
        logo="no-hero-logo"
        socials="no-social-media"
        navbar="pages_navbar"
      >
        <Content />
        <Footer />
      </Navbar>
    </div>
  );
}

export default About;
