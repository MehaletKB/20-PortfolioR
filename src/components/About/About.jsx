import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../images/pic.png";
import "./About.css";
// import Button from "react-bootstrap/Button";

export default function About() {
    return (
        <div id="about">
            <div className ="about">
                <h2>A bit about me ...</h2>
                <Container>
                    <div className="about-text">
                        <p>Hi! I'm <strong>Mehalet</strong>, a newly minted Full Stack Developer , eager to contribute in bringing ideas to life.</p>
                        <p>My background is in Graphic Design, making things look good is a passion. I hope to bridge Graphic Design with Front-end web development to create beautiful and engaging applications.</p>
                    </div>
                </Container>
                
            </div>

        </div>
    )
}
