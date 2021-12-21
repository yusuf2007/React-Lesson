import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid align-items-center">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <span
            style={{ width: 20, height: 20 }}
            className="alert alert-primary d-flex align-items-center justify-content-center p-1"
          >
            4
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
