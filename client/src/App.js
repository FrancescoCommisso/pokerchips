import React from "react";
import "./App.css";
import CreateTable from "./components/CreateTable";
import JoinTable from "./components/JoinTable";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <CreateTable />
      <JoinTable />
      <Table />
    </div>
  );
}

export default App;
