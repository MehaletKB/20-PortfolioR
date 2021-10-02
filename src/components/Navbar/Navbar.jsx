import React from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Hero from "../../images/hero.jpg"
import Logo from "../../images/logoW.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <Container fluid>
            <div>
                <Image id="hero" src={Hero} />
            </div>
            <div className="box">
                <Image id="logo" src={Logo} />
                <h1> Mehalet KesateBirhan</h1>
                <ul className="text-center">
                    <a className="nav-btn" href="#about">About</a>
                    <a className="nav-btn" href="#projects">Projects</a>
                    <a className="nav-btn" href="#contact">Contact</a>
                </ul>
            </div>

        </Container>
    )
}