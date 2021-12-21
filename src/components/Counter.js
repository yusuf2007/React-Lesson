import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onDelete, counter, onDecrement, onIncrement } = this.props;

    const { id, value } = counter;

    let spanClassName = "p-1 mx-3 alert alert-";
    spanClassName += value === 0 ? "danger" : "primary";

    return (
      <div className="card mb-3">
        <img
          className="card-img-top"
          src={`https://picsum.photos/id/${id}/400/200`}
          alt="random picsum photos"
        />

        <div className="card-body ">
          <button
            className="btn btn-success mx-3"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <span className={spanClassName}>{value}</span>
          <button
            disabled={value === 0 && true}
            className="btn btn-warning mx-3"
            onClick={() => onDecrement(counter)}
          >
            -
          </button>

          <button onClick={() => onDelete(id)} className="btn btn-danger">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
