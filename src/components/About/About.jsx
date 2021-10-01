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
                <h2><i class="fas fa-handshake">I've got new skill and I'm not afraid to use them!</i></h2>
                <Container>
                    <div className="about-text">
                        <p>Hi! I'm <strong>Mehalet</strong>, a newly minted Full Stack Developer whose real strength lies in Frontend development. I'm very eager to help bring great ideas to life by collaborating and learning from fellow developers.</p>
                        <p>Originally from Ethiopia, I relocated  to the US in 2006 and have taken many career paths since. I'm currently a full time Graphic Designer looking to bridge Art with Web Development to create beautiful and engaging applications.</p>
                    </div>
                </Container>
                
            </div>

        </div>
    )
}

