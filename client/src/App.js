import React from "react";
import "./App.css";
import CreateTable from "./components/CreateTable";
import JoinTable from "./components/JoinTable";
import Table from "./components/Table";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={CreateTable} />
                <Route exact path="/join" component={JoinTable} />
                <Route exact path="/table/:id/:name" component={Table} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
