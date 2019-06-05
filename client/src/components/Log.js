import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";

class Log extends Component {
  render() {
    return (
      <Container className="bordered">
        <Row>
          <Col>
            <h4 className="title">Table Log</h4>
          </Col>
        </Row>

        <Row>
          <Col
            className="my-2"
            style={{ maxHeight: "200px", overflowY: "scroll" }}
          >
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
