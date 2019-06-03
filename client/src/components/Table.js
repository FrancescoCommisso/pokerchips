import React, { Component } from "react";
import { Row, Container, Col, Button, InputGroup } from "react-bootstrap";
class Table extends Component {
  state = { tableid: 12345, pot: 0, remainingChips: 1000 };
  render() {
    return (
      <Container className="bg-warning">
        <Row>
          <Col>
            <h1> Table-ID: {this.state.tableid}</h1>
            <h2>Remaining Chips: {this.state.remainingChips}</h2>
            <h2>Pot: {this.state.pot}</h2>
          </Col>
        </Row>
        <Row>
          <Col className="bg-dark">
            <input placeholder="Amount" />
            <Button>Bet</Button>
          </Col>
          <Col className="bg-info">
            <input placeholder="Amount" />
            <Button>Take</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Table;
