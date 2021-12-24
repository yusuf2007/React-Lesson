// component => class , function

// class component

import React, { Component } from "react";
import "../css/App.css";
import Counters from "./Counters";
import Navbar from "./Navbar.js";

class App extends Component {
  state = {
    counters: [
      { id: 106, value: 0 },
      { id: 376, value: 5 },
      { id: 28, value: 8 },
      { id: 1015, value: 0 },
      { id: 71, value: 0 },
      { id: 49, value: 0 },
    ],
  };

  handleDelete = (id) => {
    const leftCounters = this.state.counters.filter(
      (counter) => counter.id !== id
    );

    this.setState({ counters: leftCounters });
  };

  handleReset = () => {
    const resetedCounters = this.state.counters.map((counter) => {
      counter.value = 0;

      return counter;
    });

    this.setState({ counters: resetedCounters });

    console.log(resetedCounters);
  };

  handleIncrement = (counter) => {
    const cloneCounters = [...this.state.counters];
    let index = cloneCounters.indexOf(counter);
    cloneCounters[index] = { ...counter };
    cloneCounters[index].value++;
    this.setState({ counters: cloneCounters });
  };

  handleDecrement = (counter) => {
    const cloneCounters = [...this.state.counters];
    let index = cloneCounters.indexOf(counter);
    cloneCounters[index] = { ...counter };
    cloneCounters[index].value--;
    this.setState({ counters: cloneCounters });
  };

  render() {
    const { counters } = this.state;

    return (
      <div className="App bg-dark">
        <Navbar
          type={counters.filter((counter) => counter.value !== 0).length}
        />
        <div className="container py-5">
          <Counters
            counters={counters}
            handleDecrement={this.handleDecrement}
            handleIncrement={this.handleIncrement}
            handleDelete={this.handleDelete}
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
