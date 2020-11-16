import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./About.scss";

const About = () => {
  return (
    <Container className="about-form">
      <Row>
        <Col md="5" className="about-image">
          <img src="https://picsum.photos/seed/3/400/400" alt="" />
        </Col>
        <Col md="6">
          <div className="about-form-title">about me</div>
          <div className="about-form-text">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful contentIn publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content In publishing and graphic design,
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful contentIn publishing and graphic design, Lorem ipsum is a
            placeholder text commonly used to demonstrate the visual form of a
            document or a typeface without relying on meaningful content
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
