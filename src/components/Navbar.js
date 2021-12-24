import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { type } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid align-items-center">
          <a className="navbar-brand" href="#hello">
            Smart Shop
          </a>

          <span
            style={{ width: 20, height: 20 }}
            className="alert alert-primary d-flex align-items-center justify-content-center p-1"
          >
            {type}
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
