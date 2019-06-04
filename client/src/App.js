import React from "react";
import "./App.css";
import CreateTable from "./components/CreateTable";
import JoinTable from "./components/JoinTable";
import Table from "./components/Table";
import "./components/Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Container className="cont" style={{ maxWidth: "700px" }}>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/create" component={CreateTable} />
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
