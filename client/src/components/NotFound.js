import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Table Not Found</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
