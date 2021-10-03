import React from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Hero from "../../images/hero.jpg"
import Logo from "../../images/logoW.png"
import "./Navbar.css"


import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const navLinks = [
    {
        name: "About",
        route: "/about",
    },
    {
        name: "Projects",
        route: "/projects",
    },
    {
        name: "Contact",
        route: "/contact",
    },
];

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
                    <div>
                        {navLinks.map((link, index) => (
                            <NavLink key={index} to={link.route}  className="nav-btn">
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </ul>
            </div>

        </Container>
    )
}

Navbar.propTypes = {
    name: PropTypes.string,
    route: PropTypes.string,
};