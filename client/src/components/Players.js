import React, { Component } from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";
import Switch from "react-switch";

class Players extends Component {
  state = { show: false };

  onToggle = e => {
    this.setState({ show: e });
  };

  render() {
    let info;
    if (this.state.show) {
      info = (
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
      );
    } else {
      info = null;
    }

    return (
      <Container className="bordered">
        <Row>
          <Col>
            <h4 className="title">Standings</h4>
          </Col>
          <Col className="text-right">
            <Switch
              className="align-middle"
              onColor="#000000"
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={this.onToggle}
              checked={this.state.show}
            />
          </Col>
        </Row>

        {info}
      </Container>
    );
  }
}

export default Players;
