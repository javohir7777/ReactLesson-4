import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./header.module.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="container d-flex justify-content-between alegn-items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/posts">PostsPage</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/portfolios">Portfolios</NavLink>
          <NavLink to="/lifesycle">Life sycle</NavLink>
          <a
            href="https://t.me/javohir_zafa0vich"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
