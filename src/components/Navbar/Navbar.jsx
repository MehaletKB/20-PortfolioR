import React from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Hero from "../../images/hero.jpg"
import "./Navbar.css"

export default function Navbar() {
    return (
        <Container fluid>
            <div>
                <Image id="hero" src={Hero} />
            </div>
        </Container>
    )
}