import React, { Component } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import Log from "./Log";
import Players from "./Players";
import NotFound from "./NotFound";
import Dash from "./Dash";
import Pot from "./Pot";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notFound: null,
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
    if (
      this.state.players[this.state.player] >= this.state.betAmount &&
      this.state.betAmount > 0
    ) {
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
    if (
      this.state.pot.total >= this.state.takeAmount &&
      this.state.takeAmount > 0
    ) {
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
    this.loadData();
    setInterval(this.loadData, 500);
  }

  loadData = () => {
    try {
      fetch("/table", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(res => {
        if (res.ok) {
          res
            .json()
            .then(state => this.setState(state))
            .then(this.setState({ notFound: null }));
        } else {
          console.log("Error finding game");
          this.setState({ notFound: true });
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    //comment
    if (this.state.players != null) {
      return (
        <Container className="">
          <Row className="my-3">
            <Col className="text-left">
              <h4 className="">{this.state.id}</h4>
            </Col>
            <Col className="text-right">
              <h4 className="">{this.state.player}</h4>
            </Col>
          </Row>
          <Row className="my-1">
            <Col>
              <Dash amount={this.state.players[this.state.player]} />
            </Col>
          </Row>

          <Row className="my-1">
            <Col>
              <Pot pot={this.state.pot} />
            </Col>
          </Row>
          <Row className="my-1">
            <Col className="">
              <input
                className="form-control"
                min={0}
                type="number"
                onChange={this.handleBetChange}
                placeholder="Amount"
              />
              <Button
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                  color: "#000000"
                }}
                className="btn-default round btn-block my-2"
                onClick={this.onBet}
              >
                Bet
              </Button>
            </Col>
            <Col className="">
              <input
                min={0}
                className="form-control my-1"
                type="number"
                onChange={this.handleTakeChange}
                placeholder="Amount"
              />
              <Button
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                  color: "#000000"
                }}
                className="btn-default round btn-block my-2"
                onClick={this.onTake}
              >
                Take
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Players players={this.state.players} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Log logs={this.state.logs} />
            </Col>
          </Row>
        </Container>
      );
    } else if (this.state.notFound === true) {
      return <NotFound />;
    } else {
      return <div>Fetching</div>;
    }
  }
}

export default Table;
