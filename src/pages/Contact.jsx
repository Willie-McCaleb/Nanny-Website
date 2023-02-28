import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar
        logo="no-hero-logo"
        socials="no-social-media"
        navbar="pages_navbar"
      >
        <ContactForm />
        <Footer />
      </Navbar>
    </div>
  );
}

export default Contact;
