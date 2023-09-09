import React, { Component } from "react";

export class Portfolio extends Component {
  render() {
    let portfolioId = window.location.pathname.split("/").at(-1);
    return (
      <section>
        <h1>Portfolio {portfolioId}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          provident.
        </p>
      </section>
    );
  }
}

export default Portfolio;
