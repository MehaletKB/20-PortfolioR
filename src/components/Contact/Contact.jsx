import React from "react";
import Button from "react-bootstrap/Button";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
        <h2 className="">
      <i class="far fa-id-card fa-fw"></i> Get In Touch</h2>
      <div className="contact-btns">
        <Button classnName="contact-btn" href="mailto:tatybcoding@gmail.com" variant="info" target="_blank"><i class="far fa-envelope fa-2x"> Email</i></Button>{" "}

        <Button classnName="contact-btn" href="https://www.linkedin.com/in/mkesate/" target="_blank" variant="info"><i class="fab fa-linkedin fa-2x"> LinkedIn</i></Button>{" "}

        <Button classnName="contact-btn" href="https://github.com/MehaletKB" target="_blank" variant="info"><i class="fab fa-github fa-2x"> GitHub</i></Button>{" "}

        <Button classnName="contact-btn" href="https://docs.google.com/document/d/1e_ixmwnNyYB1eCNGUp5QUwa80_ldEXDl1Wy6zbOAlM8/edit?usp=sharing" target="_blank" variant="info"><i class="far fa-file fa-2x"> Resume</i></Button>{" "}

      </div>
    </div>
  );
}
