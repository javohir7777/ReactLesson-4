import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Portfolios extends Component {
  render() {
    return (
        <section>
          <h1>Portfolios</h1>
          <Link className="me-3" to="/portfolios/1">
            Portfolio 1
          </Link>
          <Link className="me-3" to="/portfolios/2">
            Portfolio 2
          </Link>
          <Link className="me-3" to="/portfolios/3">
            Portfolio 3
          </Link>
          <Link className="me-3" to="/portfolios/4">
            Portfolio 4
          </Link>
        </section>
    );
  }
}

export default Portfolios;
