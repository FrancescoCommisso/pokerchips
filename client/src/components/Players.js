import React, { Component } from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";

class Players extends Component {
  state = {};
  render() {
    return (
      <Container className="bordered">
        <Row>
          <Col>
            <h3 className="title">Players</h3>
          </Col>
        </Row>

        <Row className=" ">
          {Object.keys(this.props.players).map((player, i) => (
            <Col className=" col-xl">
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

export default Players;
