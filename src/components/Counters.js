import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const {
      counters,
      handleDecrement,
      handleIncrement,
      handleDelete,
      handleReset,
    } = this.props;

    if (counters.length === 0)
      return <h1 className="text-white text-center p-5">Out of Stock</h1>;

    return (
      <>
        <button onClick={handleReset} className="btn btn-primary  mb-4 ">
          Reset
        </button>
        <div className="row">
          {counters.map((counter) => (
            <div key={counter.id} className="col-lg-4">
              <Counter
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
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
