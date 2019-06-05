import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";
import Switch from "react-switch";

class Log extends Component {
  state = { show: false };
  onToggle = e => {
    this.setState({ show: e });
  };

  render() {
    let info;

    if (this.state.show) {
      info = (
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
      );
    } else {
      info = null;
    }
    return (
      <Container className="bordered">
        <Row>
          <Col>
            <h4 className="title">Activity</h4>
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

export default Log;
