import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Profile from "../../images/pic.png";
import "./About.css";

const navLinks = [
    {
        name: "Home",
        route: "/home",
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

export default function About() {
    return (
        <div id="about">

            <div className ="about">
                <div className="topbar">
                    <div className="topbar-text">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} to={link.route}  className="topbar-btn">
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
                
                <h2><i class="fas fa-comment-dots"></i> I've got new skill and I'm not afraid to use them!</h2>
                <Container className="about-text">
                <Image className="profile" src={Profile}></Image>
                    <div >
                        <p>Hi! I'm <strong>Mehalet</strong>, a newly minted Full Stack Developer whose true strength is in Frontend design.</p><br/>
                        <p>Originally from Ethiopia, I relocated to the United States in 2006 and have taken many career paths since. I'm currently a full time Graphic Designer looking to bridge Art with Web Development to create beautiful and engaging applications.</p><br/>
                        <p>Successfully finishing a full-stack development boot camp with Washington University in St. Louis has shown me that I've barely scratched the surface of what is possible in web development. 
                        I'm very eager to learn, collaborate and help bring great ideas to life.</p>
                    </div>
                </Container>
            </div>

        </div>
    )
}

