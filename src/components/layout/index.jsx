import React, { Component, Fragment } from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="container">
          <Outlet /> 
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
