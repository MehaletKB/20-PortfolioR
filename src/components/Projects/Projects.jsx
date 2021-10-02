import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import MyDaily from "../../images/projects/07-myDaily.gif";
import ArtSell from "../../images/projects/16-ArtSell.gif";

import L_HTML from "../../images/tools/html-5.svg";
import L_CSS3 from "../../images/tools/CSS3_logo.svg";
import L_EXPRESS from "../../images/tools/express.svg";
import L_BOOTSTRAP from "../../images/tools/bootstrap-4.svg";
import L_HANDLEBARS from "../../images/tools/handlebars.svg";
import L_REACT from "../../images/tools/react.svg";
import L_REACT_ROUTER from "../../images/tools/react-router.svg";
import L_REACT_BOOTSTRAP from "../../images/tools/react-bootstrap.svg";
import L_MYSQL from "../../images/tools/mysql.svg";
import L_MONGODB from "../../images/tools/mongodb.svg";
import L_NODE from "../../images/tools/nodejs.svg";
import L_JAVASCRIPT from "../../images/tools/javascript.svg";
import L_HEROKU from "../../images/tools/heroku.svg";
import L_GIT from "../../images/tools/git-icon.svg";
import L_GITHUB_PAGES from "../../images/tools/github.svg";
import L_REDUX from "../../images/tools/redux.svg";
import L_JQUERY from "../../images/tools/jquery.svg";
import L_STRIPE from "../../images/tools/stripe.svg";

import "./Projects.css";

function Projects() {
  return (
    <div className="project-top">
    <h2><i class="fas fa-project-diagram"></i>Things I've Made</h2>
    <div className="all-projects" id="projects">
      {/* <Row> */}
        <Card className="card">
          <Card.Img variant="top" className="img-style" src={MyDaily} />
          <Card.Body className="body-style">
            <Card.Title className="card-title">myDaily</Card.Title>
            <Card.Text className="card-text">
              A small landing page application with a variety of information that updates daily.
            </Card.Text>
              <div>
                <Card.Img variant="top" className="tools" src={L_HTML} />
                <Card.Img variant="top" className="tools" src={L_CSS3} />
                <Card.Img variant="top" className="tools" src={L_JAVASCRIPT} />
                <Card.Img variant="top" className="tools" src={L_JQUERY} />
                <Card.Img variant="top" className="tools" src={L_GITHUB_PAGES} />
            </div>
            <Button className="card-btn" href="https://github.com/MehaletKB/myDaily" target="_blank">
              Live Page
            </Button>
            <Button className="card-btn" href="https://github.com/MehaletKB/myDaily" target="_blank">
              GitHub
            </Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" className="img-style" src={ArtSell} />
          <Card.Body className="body-style">
            <Card.Title className="card-title">ArtSell</Card.Title>
            <Card.Text className="card-text">
              A small e-commerce application for the display and sale of artwork.
            </Card.Text>
              <div>
                <Card.Img variant="top" className="tools" src={L_JQUERY} />
                <Card.Img variant="top" className="tools" src={L_JQUERY} />
            </div>
            <Button className="card-btn" href="https://artsell.herokuapp.com/" target="_blank">
              Live Page
            </Button>
            <Button className="card-btn" href="https://github.com/MehaletKB/ArtSell" target="_blank">
              GitHub
            </Button>
          </Card.Body>
        </Card>
        
        <Card className="card">
          <Card.Img variant="top" className="img-style" src={MyDaily} />
          <Card.Body className="body-style">
            <Card.Title className="card-title">myDaily</Card.Title>
            <Card.Text className="card-text">
              A small landing page application with a variety of information that updates daily.
            </Card.Text>
              <div>
                <Card.Img variant="top" className="tools" src={L_JQUERY} />
                <Card.Img variant="top" className="tools" src={L_JQUERY} />
            </div>
            <Button className="card-btn" href="https://af-cmdz.github.io/myDaily/" target="_blank">
              Live Page
            </Button>
            <Button className="card-btn" href="https://github.com/MehaletKB/myDaily" target="_blank">
              GitHub
            </Button>
          </Card.Body>
        </Card>
        

      {/* </Row> */}
    </div>
    </div>
  );
}

export default Projects;
