import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faMapMarkerAlt,faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="4">
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/portfolio"> Portfolio</Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md="5">
            <ul>
              <li><FontAwesomeIcon icon={faMapMarkerAlt}/>lorem ipsum dolur is nas ich bien da</li>
              <li><FontAwesomeIcon icon={faCodeBranch}/>github : pedram.roosta@github</li>
              <li><FontAwesomeIcon icon={faEnvelope}/>pediroosta@gmail.com</li>
            </ul>
          </Col>
          <Col md="3">
              follow us :
            <div className='footer-social'>
            <FontAwesomeIcon icon={faEnvelope}/>
            <FontAwesomeIcon icon={faCodeBranch}/>
            <FontAwesomeIcon icon={faMapMarkerAlt}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
