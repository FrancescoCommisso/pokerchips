import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Dash extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col className="border border-bottom rounded">
            <h4 className="my-1 border-bottom ">Your Chips</h4>
            <h2>{this.props.amount}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dash;
