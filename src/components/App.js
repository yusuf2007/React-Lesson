// component => class , function

// class component

import React, { Component } from "react";
import "../css/App.css";
import Counters from "./Counters";
import Navbar from "./Navbar.js";

class App extends Component {
  render() {
    return (
      <div className="App bg-dark">
        <Navbar />
        <div className="container py-5">
          <Counters />
        </div>
      </div>
    );
  }
}

export default App;
