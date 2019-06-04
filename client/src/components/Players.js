import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Players extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Players</h3>
          </Col>
        </Row>
        {Object.keys(this.props.players).map((player, i) => (
          <p key={i}>
            {player}: {this.props.players[player]}
          </p>
        ))}
      </Container>
    );
  }
}

export default Players;
