import React, { Component } from "react";
import "./Main.css";
import { Container, Row, Col, Button } from "react-bootstrap";

import Footer from "./Footer";

const landingIcon = require("../assets/landingicon.svg");

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
            <h1> Virtual Chips</h1>
            <h5>Use Your Phone as a Poker Set </h5>
            <p>(Cards not included)</p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="text-center">
            <img
              src={landingIcon}
              className="img-fluid landingicon "
              alt="Responsive Image"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={this.onCreate}
              className="btn-default round btn-block my-2 button1"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#000000",
                color: "#000000"
              }}
            >
              Create New Table
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              style={{
                backgroundColor: "#000000",
                borderColor: "#000000",
                color: "#ffffff"
              }}
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
