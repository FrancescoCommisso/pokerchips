import React, { Component } from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";

class PotTotals extends Component {
  state = {};
  render() {
    return (
      <Container className="">
        <Row className=" ">
          {Object.keys(this.props.players).map((player, i) => (
            <Col className=" ">
              <Player
                key={i}
                player={player}
                amount={this.props.players[player]}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PotTotals;
