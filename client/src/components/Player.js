import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Player extends Component {
  state = { name: this.props.player, amount: this.props.amount };
  render() {
    return (
      <Container className="">
        <Row className="">
          <Col>{this.state.name}</Col>
        </Row>
        <Row className="">
          <Col>{this.state.amount}</Col>
        </Row>
      </Container>
    );
  }
}

export default Player;
