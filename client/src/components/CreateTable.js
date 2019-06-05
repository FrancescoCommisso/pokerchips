import React, { Component } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

class CreateTable extends Component {
  state = { id: null, name: null, numberOfChips: null, error: null };

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
        .then(state => this.setState(state))
        .then(
          this.props.history.push(`/table/${this.state.id}/${this.state.name}`)
        );
    } else {
      this.showError();
    }
  };

  showError = () => {
    //COMPLETE ME!
    this.setState({ error: true });
    console.log("Fill in all the fields bud.");
  };

  render() {
    let error;
    if (this.state.error) {
      error = (
        <p style={{ color: "red" }} className="text-center">
          Fill out all fields.
        </p>
      );
    } else {
      error = (
        <p style={{ color: "red" }} className="text-center">
          <br />
        </p>
      );
    }

    return (
      <Container>
        <Row className="cont">
          <Col className="title">
            <h3>Create Table</h3>
          </Col>
        </Row>
        <Row>
          <Col className="text-left">
            <p>Here is your Table-ID.</p>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <h1>{this.state.id}</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-left">
            <p>Your friends will need this code to join the table.</p>
          </Col>
        </Row>
        <Form className="text-center">
          <input
            className="form-control my-1"
            onChange={this.handleNameChange}
            placeholder="Name"
          />
          <input
            className="form-control my-1"
            type="number"
            onChange={this.handleChipsChange}
            placeholder="Number of Chips"
          />

          {error}

          <Button
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#000000",
              color: "#000000"
            }}
            className="btn-default round btn-block my-2"
            onClick={this.createGame}
          >
            Create New Table
          </Button>
        </Form>
      </Container>
    );
  }
}

export default CreateTable;
