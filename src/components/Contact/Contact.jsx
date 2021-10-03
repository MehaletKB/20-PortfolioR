// import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers.js";
import { NavLink } from "react-router-dom";

import "./Contact.css";

const navLinks = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Projects",
    route: "/projects",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
      setErrorMessage("");
    } else if (inputType === "email") {
      setEmail(inputValue);
      setErrorMessage("");
    } else {
      setMessage(inputValue);
      setErrorMessage("");
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (!inputValue) {
      setErrorMessage(`ERROR: ${inputType} cannot be blank`);
    } else if (inputType === "email" && !validateEmail(email)) {
      setErrorMessage(`Your email is not valid`);
      return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage("Name cannot be blank");
      return;
    }
    if (!message) {
      setErrorMessage("Message cannot be blank");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage(`Your email is invalid`);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-section" id="contact">
      <div className="topbar">
        <div className="topbar-text">
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.route} className="topbar-btn">
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      <h2>
        <i class="far fa-id-card fa-fw"></i> Get In Touch
      </h2>
      <div className="contact-info">
        <div>
          <Form className="form">
            <div>
              <label htmlFor={name}>Name:</label>
              <input
                id={name}
                value={name}
                name="name"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="email"
              />
            </div>

            <div>
              <label htmlFor={email}>Email:</label>
              <input
                id={email}
                value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="email"
              />
            </div>

            <div className="message-area">
              <label htmlFor={message}>Message:</label>
              <textarea
                rows="4"
                cols="40"
                name="message"
                id={message}
                value={message}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </div>

            <Button
              type="button"
              onClick={handleFormSubmit}
              href="mailto:tatybcoding@gmail.com"
              className="msg-btn"
            >
              Submit
            </Button>
          </Form>

          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="contact-btns">
          <Button
            classnName="contact-btn"
            href="https://www.linkedin.com/in/mkesate/"
            target="_blank"
            variant="info"
          >
            <i class="fab fa-linkedin fa-2x"> LinkedIn</i>
          </Button>{" "}
          <Button
            classnName="contact-btn"
            href="https://github.com/MehaletKB"
            target="_blank"
            variant="info"
          >
            <i class="fab fa-github fa-2x"> GitHub</i>
          </Button>{" "}
          <Button
            classnName="contact-btn"
            href="https://docs.google.com/document/d/1e_ixmwnNyYB1eCNGUp5QUwa80_ldEXDl1Wy6zbOAlM8/edit?usp=sharing"
            target="_blank"
            variant="info"
          >
            <i class="far fa-file fa-2x"> Resume</i>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
