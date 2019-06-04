import React, { Component } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

class JoinTable extends Component {
  state = { name: null, id: null, numberOfChips: null };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleTableIDChange = e => {
    this.setState({ id: e.target.value });
  };

  handleNumberOfChipsChange = e => {
    this.setState({ numberOfChips: e.target.value });
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
          console.log("Error Joining Game");
        }
      });
    } else {
      this.showError();
    }
  };

  showError = () => {
    console.log("Fill in all the fields!");
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Join Table</h1>
          </Col>
        </Row>
        <Form className="text-center">
          <input onChange={this.handleTableIDChange} placeholder="Table ID" />
          <input onChange={this.handleNameChange} placeholder="Name" />
          <input
            type="number"
            onChange={this.handleNumberOfChipsChange}
            placeholder="Number of Chips"
          />
          <Button onClick={this.joinTable}>Join Table</Button>
        </Form>
      </Container>
    );
  }
}

export default JoinTable;
