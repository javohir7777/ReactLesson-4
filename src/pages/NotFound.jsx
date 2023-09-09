import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>NotFound</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NotFound;
