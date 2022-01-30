import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

import MyDaily from "../../images/projects/07-myDaily.gif";
import ArtSell from "../../images/projects/16-ArtSell.gif";
import WorkoutTracker from "../../images/projects/18-WorkoutTracker.gif";

import L_HTML from "../../images/tools/html-5.svg";
import L_CSS3 from "../../images/tools/CSS3_logo.svg";
import L_EXPRESS from "../../images/tools/express.svg";
import L_BOOTSTRAP from "../../images/tools/bootstrap-4.svg";
import L_HANDLEBARS from "../../images/tools/handlebars.svg";
import L_MYSQL from "../../images/tools/mysql.svg";
import L_MONGODB from "../../images/tools/mongodb.svg";
import L_JAVASCRIPT from "../../images/tools/javascript.svg";
import L_HEROKU from "../../images/tools/heroku.svg";
import L_GITHUB_PAGES from "../../images/tools/github.svg";
import L_JQUERY from "../../images/tools/jquery.svg";
import L_STRIPE from "../../images/tools/stripe.svg";
import L_BULMA from "../../images/tools/bulma.svg";

import "./Projects.css";

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
    name: "Contact",
    route: "/contact",
  },
];

function Projects() {
  return (
    <div className="project-top" id="projects">
      <div className="topbar">
        <div className="topbar-text">
          <div>
            <hp>Mehalet KesateBirhan</hp>
          </div>
          <div>
            {navLinks.map((link, index) => (
              <NavLink key={index} to={link.route} className="topbar-btn">
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <h2>
        <i class="fas fa-project-diagram"></i> Things I've Worked On
      </h2>
      <div className="all-projects">
        <Card className="card">
          <Card.Img variant="top" className="img-style" src={WorkoutTracker} />
          <Card.Body className="body-style">
            <Card.Title className="card-title">Workout Tracker</Card.Title>
            <Card.Text className="card-text">
              An application that lets users log and track workout sessions.
            </Card.Text>
            <div>
              <Card.Img variant="top" className="tools2" src={L_EXPRESS} />
              <Card.Img variant="top" className="tools2" src={L_MONGODB} />
            </div>
            <Button
              className="card-btn"
              href="https://floating-tundra-80148.herokuapp.com/?id=613eac9076b6491c68a6b56a"
              target="_blank"
            >
              Live Page
            </Button>
            <Button
              className="card-btn"
              href="https://github.com/MehaletKB/18-WorkoutTracker"
              target="_blank"
            >
              GitHub
            </Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img variant="top" className="img-style" src={ArtSell} />
          <Card.Body className="body-style">
            <Card.Title className="card-title">ArtSell</Card.Title>
            <Card.Text className="card-text">
              A small e-commerce application for the display and sale of
              artwork.
            </Card.Text>
            <div>
              <Card.Img variant="top" className="tools2" src={L_EXPRESS} />
              <Card.Img variant="top" className="tools-h" src={L_HANDLEBARS} />
              <Card.Img variant="top" className="tools3" src={L_BOOTSTRAP} />
              <Card.Img variant="top" className="tools" src={L_MYSQL} />
              <Card.Img variant="top" className="tools4" src={L_HEROKU} />
              <Card.Img variant="top" className="tools2" src={L_STRIPE} />
            </div>
            <Button
              className="card-btn"
              href="https://artsell.herokuapp.com/"
              target="_blank"
            >
              Live Page
            </Button>
            <Button
              className="card-btn"
              href="https://github.com/MehaletKB/ArtSell"
              target="_blank"
            >
              GitHub
            </Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img variant="top" className="img-style" src={MyDaily} />
          <Card.Body className="body-style">
            <Card.Title className="card-title">myDaily</Card.Title>
            <Card.Text className="card-text">
              A small landing page application with a variety of information
              that updates daily.
            </Card.Text>
            <div>
              <Card.Img variant="top" className="tools" src={L_HTML} />
              <Card.Img variant="top" className="tools" src={L_CSS3} />
              <Card.Img variant="top" className="tools" src={L_JAVASCRIPT} />
              <Card.Img variant="top" className="tools3" src={L_JQUERY} />
              <Card.Img variant="top" className="tools4" src={L_BULMA} />
              <Card.Img variant="top" className="tools3" src={L_GITHUB_PAGES} />
            </div>
            <Button
              className="card-btn"
              href="https://mehaletkb.github.io/myDaily/"
              target="_blank"
            >
              Live Page
            </Button>
            <Button
              className="card-btn"
              href="https://github.com/MehaletKB/myDaily"
              target="_blank"
            >
              GitHub
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
