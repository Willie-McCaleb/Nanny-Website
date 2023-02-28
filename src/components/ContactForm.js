import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const form2 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lbeen4r",
        "template_3ei21ce",
        form2.current,
        "6TTdGOAognU1Pwzt9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  // Made with EmailJS: https://dashboard.emailjs.com/admin/templates/5jqh69b

  return (
    <div className="contact-form">
      <img alt="" src="assets/logos/sq logo.svg" />
      <h1>say hello</h1>

      <div className="owner_info"></div>

      <form ref={form2} onSubmit={sendEmail}>
        <div className="name">
          <input placeholder="First Name" name="user_firstName" required />
          <input placeholder="Last Name" name="user_lastName" />
        </div>

        <input placeholder="Email" name="user_email" required />
        <input placeholder="Subject" name="subject" />
        <textarea
          placeholder="Message"
          name="message"
          rows="4"
          required
        ></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
