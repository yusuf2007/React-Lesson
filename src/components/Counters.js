import React, { Component } from "react";
import Counter from "./Counter";

export class Counters extends Component {
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

    if (counters.length === 0)
      return <h1 className="text-white text-center p-5">Out of Stock</h1>;

    return (
      <>
        <button onClick={this.handleReset} className="btn btn-primary  mb-4 ">
          Reset
        </button>
        <div className="row">
          {counters.map((counter) => (
            <div key={counter.id} className="col-lg-4">
              <Counter
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                counter={counter}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Counters;
