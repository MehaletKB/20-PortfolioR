import React from "react";
import Button from "react-bootstrap/Button";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
        <h2 className="pt-3 text-center font-details-b pb-3">
        <i class="far fa-id-card fa-fw"> Get In Touch</i>
      </h2>
      <>
        <Button href="mailto:tatybcoding@gmail.com" variant="info" target="_blank"><i class="fas fa-envelope-square fa-3x">Email</i></Button>{" "}

        <Button href="https://www.linkedin.com/in/mkesate/" target="_blank" variant="info"><i class="fab fa-linkedin-in fa-3x">LinkedIn</i></Button>{" "}

        <Button href="https://github.com/MehaletKB" target="_blank" variant="info"><i class="fab fa-github fa-3x">GitHub</i></Button>{" "}

        <Button href="https://docs.google.com/document/d/1e_ixmwnNyYB1eCNGUp5QUwa80_ldEXDl1Wy6zbOAlM8/edit?usp=sharing" target="_blank" variant="info"><i class="far fa-file fa-3x">Resume</i></Button>{" "}

      </>
    </div>
  );
}
