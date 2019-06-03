import React, { Component } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

class CreateTable extends Component {
  state = { id: null, name: null, numberOfChips: null };

  componentDidMount() {
    let id = this.generateID();
    this.setState({ id: id });
  }

  generateID() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleChipsChange = e => {
    this.setState({ numberOfChips: e.target.value });
  };

  createGame = e => {
    if (this.state.name != null && this.state.numberOfChips != null) {
      fetch("/create_game", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
        .then(res => res.json())
        .then(state => this.setState(state));
    } else {
      this.showError();
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Create Table</h1>
          </Col>
        </Row>
        <Form className="text-center">
          <input
            type="number"
            onChange={this.handleChipsChange}
            placeholder="Number of Chips"
          />
          <input onChange={this.handleNameChange} placeholder="Name" />
          <Button onClick={this.createGame}>Create New Table</Button>
        </Form>
      </Container>
    );
  }
}

export default CreateTable;
