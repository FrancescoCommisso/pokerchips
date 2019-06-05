import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Player extends Component {
  render() {
    return (
      <Container

      // style={{ maxWidth: "50px", maxHeight: "50px" }}
      >
        <Row className="">
          <Col className="border rounded my-2 " style={{ padding: "0px" }}>
            <p className=" border-bottom mx-1">{this.props.player}</p>
            <p>{this.props.amount}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Player;
