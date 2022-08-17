import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  //AiOutlineTwitter,
 // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,FaDiscord } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sudeep</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SR</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Sudeep72"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.com/users/749582193248043119"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
            {/*<li className="social-icons">
              <a
                href="https://twitter.com/Sudeep15765761"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
  </li>*/}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sudeep-r-878022233/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://sudeep.carrd.co/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MdOutlineMenuBook />
              </a>
            </li>
           {/*} <li className="social-icons">
              <a
                href="https://www.instagram.com/sudeep__79/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
</li>*/}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
