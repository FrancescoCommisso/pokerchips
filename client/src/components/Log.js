import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Log extends Component {
  render() {
    return (
      <Container className="">
        <Row>
          <Col>
            <h3 className="text-left">Logs</h3>
          </Col>
        </Row>
        {this.props.logs.map((log, i) => (
          <p className="text-left" key={i}>
            {log}
          </p>
        ))}
      </Container>
    );
  }
}

export default Log;
