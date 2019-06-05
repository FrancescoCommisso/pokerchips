import React, { Component } from "react";
import PotTotals from "./PotTotals";
import { Container, Row, Col } from "react-bootstrap";

class Pot extends Component {
  state = {};
  render() {
    return (
      <Container className="border rounded">
        <Row>
          <Col className=" ">
            <h4 className="my-1 border-bottom text-left">Pot</h4>
            <h2>{this.props.pot}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <PotTotals players={this.props.players} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pot;
