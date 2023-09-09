import React, { Component } from "react";

export class LifeSyclePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("constructor");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate() {
    return false;
  }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }
  render() {
    console.log("render");
    const { counter } = this.state;
    const dec = () => {
      this.setState({ counter: counter + 1 });
    };
    const inc = () => {
      this.setState({ counter: counter - 1 });
    };
    return (
      <section>
        <h1>LifeSyclePage {counter}</h1>
        <button onClick={dec}>+</button>
        <button onClick={inc}>-</button>
      </section>
    );
  }
}

export default LifeSyclePage;
