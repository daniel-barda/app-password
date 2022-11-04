import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import safe from "../images/safe.svg";
import Form from "../components/Form";

export const Home = () => {
  return (
    <article className="mt-4">
      <Container>
        <Row>
          <Col className="pt-5" sm={6}>
            <h3 className="pl-20">Stay Safe</h3>
            <img src={safe} alt="safe-img" />
          </Col>
          <Col sm={6}>
            <Form />
          </Col>
        </Row>
      </Container>
    </article>
  );
};
