import React, { Component } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "./Main.css";

class JoinTable extends Component {
  state = {
    name: null,
    id: null,
    numberOfChips: null,
    error: null,
    notFound: null
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleTableIDChange = e => {
    this.setState({ id: e.target.value });
  };

  handleNumberOfChipsChange = e => {
    this.setState({ numberOfChips: Number(e.target.value) });
  };

  joinTable = () => {
    if (
      this.state.name != null &&
      this.state.numberOfChips != null &&
      this.state.id != null
    ) {
      fetch("/join_game", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(res => {
        if (res.ok) {
          console.log("Game Joined");
          res
            .json()
            .then(
              this.props.history.push(
                `/table/${this.state.id}/${this.state.name}`
              )
            );
        } else {
          this.setState({ notFound: true });
          console.log("Error Joining Game");
        }
      });
    } else {
      this.showError();
    }
  };

  showError = () => {
    this.setState({ error: true });
    console.log("Fill in all the fields!");
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
    if (this.state.notFound) {
      error = (
        <p style={{ color: "red" }} className="text-center">
          This Game-ID does not exist.
        </p>
      );
    }

    return (
      <Container>
        <Row>
          <Col>
            <h1>Join Table</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <input
              className="form-control my-1"
              onChange={this.handleTableIDChange}
              placeholder="Table ID"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <input
              className="form-control my-1"
              onChange={this.handleNameChange}
              placeholder="Name"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <input
              className="form-control my-1"
              type="number"
              onChange={this.handleNumberOfChipsChange}
              placeholder="Number of Chips"
            />
          </Col>
        </Row>
        {error}
        <Row>
          <Col>
            <Button
              className="btn-default round btn-block my-2"
              onClick={this.joinTable}
            >
              Join Table
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JoinTable;
