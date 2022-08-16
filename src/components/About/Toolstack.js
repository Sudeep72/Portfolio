import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  //SiLinux,
  SiKalilinux,
  SiVisualstudiocode,
  //SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/*<SiLinux />*/}
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      {/*<Col xs={4} md={2} className="tech-icons">
        <SiPostman />
  </Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
