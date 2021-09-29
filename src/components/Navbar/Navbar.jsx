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
            <div class="box">
                <Image id="logo" src={Logo} />
            </div>
        </Container>
    )
}