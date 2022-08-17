import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import brainy from "../../Assets/Projects/brainy.png";
import music from "../../Assets/Projects/music.png";
import kuiz from "../../Assets/Projects/kuiz.png";
import weather from "../../Assets/Projects/weather.png";
import lap from "../../Assets/Projects/lapportt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainy}
              isBlog={false}
              title="Brainy Hub"
              description="Brainy Hub is an interactive Quiz website that helps people spending their time 
              in a useful way.It is made using React Js."
              ghLink="https://github.com/Sudeep72/Kuizz"
              demoLink="https://kui-z.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kuiz}
              isBlog={false}
              title="Kuiz"
              description="Kuiz is a simple quiz website done using HTML, CSS, and Js."
              ghLink="https://github.com/Sudeep72/kuiz"
              demoLink="https://kuiz.kui-z.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Truffle Music"
              description="Truffle Music is a Discord music bot used to hear songs with a number of commands."
              ghLink="https://github.com/Sudeep72/Truffle-music"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="Weather Forecast is a interactive website that shows the weather of the place when 
              you search it.It is made using React Js."
              ghLink="https://github.com/Sudeep72/Weather"
              demoLink="https://weather.sudeepdev.software"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lap}
              isBlog={false}
              title="Portfolio"
              description="Portfolio an online representation of work you have created, as well as your skills and experiences.
              It is made by React Js."
              ghLink="https://github.com/Sudeep72/Portfolio"
              demoLink="https://sudeepdev.software"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
