import React, { Component } from "react";
import "./Main.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer";

class Home extends Component {
  state = {};

  onJoin = () => {
    this.props.history.push(`/join`);
  };
  onCreate = () => {
    this.props.history.push(`/create`);
  };

  render() {
    return (
      <Container className="">
        <Row className="cont">
          <Col>
            <h1>Poker Chips</h1>
            <h5>Play Poker Anywhere </h5>
            <p>(Cards not included)</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={this.onCreate}
              className="btn-default round btn-block my-2"
            >
              Create New Table
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={this.onJoin}
              className="btn-default round btn-block my-2"
            >
              Join Existing Table
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
