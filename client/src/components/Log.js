import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Log extends Component {
  constructor(props) {
    super(props);
  }

  //   createLogs = () => {
  //     this.props.logs.map(function(log, i) {
  //       return (
  //         <Row>
  //           <Col>
  //             <p>log</p>;
  //           </Col>
  //         </Row>
  //       );
  //     });
  //   };

  render() {
    // let logs = this.createLogs();

    return (
      <Container>
        <Row>
          <Col>
            <h1>Logs</h1>
          </Col>
        </Row>
        {this.props.logs.map(log => (
          <p>{log}</p>
        ))}
      </Container>
    );
  }
}

export default Log;
