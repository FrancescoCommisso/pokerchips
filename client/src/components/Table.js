import React, { Component } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import Log from "./Log";
import Players from "./Players";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.match.params.name,
      id: this.props.match.params.id,
      betAmount: 0,
      takeAmount: 0
    };
  }

  handleBetChange = e => {
    this.setState({ betAmount: Number(e.target.value) });
  };

  onBet = () => {
    if (this.state.players[this.state.player] >= this.state.betAmount) {
      fetch("/bet", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(res => {
        if (res.ok) {
          res.json().then(state => this.setState(state));
        } else {
          console.log("Error finding game");
        }
      });
    } else {
      console.log("Not enough chips, bud");
    }
  };

  onTake = () => {
    if (this.state.pot >= this.state.takeAmount) {
      fetch("/take", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(res => {
        if (res.ok) {
          console.log("Game was found");
          res.json().then(state => this.setState(state));
        } else {
          console.log("Error finding game");
        }
      });
    } else {
      console.log("Theres not enough in the pot");
    }
  };

  handleTakeChange = e => {
    this.setState({ takeAmount: Number(e.target.value) });
  };

  componentDidMount() {
    fetch("/table", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => {
      if (res.ok) {
        res.json().then(state => this.setState(state));
      } else {
        console.log("Error finding game");
      }
    });
  }
  render() {
    if (this.state.players != null) {
      return (
        <Container className="">
          <Row>
            <Col className="text-left">
              <p>Table-ID: {this.state.id}</p>
            </Col>
            <Col className="text-right">
              <p>Playing As: {this.state.player}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Chips: {this.state.players[this.state.player]}</h2>
              <h2>Pot: {this.state.pot}</h2>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <input
                className="form-control my-1"
                type="number"
                onChange={this.handleBetChange}
                placeholder="Amount"
              />
              <Button
                className="btn-default round btn-block my-2"
                onClick={this.onBet}
              >
                Bet
              </Button>
            </Col>
            <Col className="">
              <input
                className="form-control my-1"
                type="number"
                onChange={this.handleTakeChange}
                placeholder="Amount"
              />
              <Button
                className="btn-default round btn-block my-2"
                onClick={this.onTake}
              >
                Take
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Log logs={this.state.logs} />
            </Col>
            <Col>
              <Players players={this.state.players} />
            </Col>
          </Row>
        </Container>
      );
    }
    return <div>Fetching</div>;
  }
}

export default Table;
