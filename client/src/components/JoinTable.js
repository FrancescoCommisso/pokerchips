import React, { Component } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

class JoinTable extends Component {
  state = {};
  componentDidMount() {
    fetch("/express_backend", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(state => this.setState(state));
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Join Table</h1>
          </Col>
        </Row>
        <Form className="text-center">
          <input placeholder="Table ID" />
          <input placeholder="Name" />
          <Button>Join Table</Button>
        </Form>
      </Container>
    );
  }
}

export default JoinTable;
