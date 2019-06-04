import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";

class Log extends Component {
  render() {
    return (
      <Container className="bordered">
        <Row>
          <Col>
            <h3 className="title">Table Log</h3>
          </Col>
        </Row>

        <Row>
          <Col style={{ maxHeight: "200px", overflowY: "scroll" }}>
            {this.props.logs.map((log, i) => (
              <p className="text-left" key={i}>
                {log}
              </p>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Log;
