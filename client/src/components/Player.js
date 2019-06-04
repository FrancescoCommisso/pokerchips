import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Player extends Component {
  render() {
    return (
      <Container className="">
        <Row className="">
          <Col>{this.props.player}</Col>
        </Row>
        <Row className="">
          <Col>{this.props.amount}</Col>
        </Row>
      </Container>
    );
  }
}

export default Player;
