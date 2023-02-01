import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    let activeStyle = {
      textDecoration: "underline",
      fontWeight: 500,
    };

    return (
      <>
        <nav className="nav">
          <div className="nav-logo">
            <svg
              width="50"
              height="32"
              viewBox="0 0 72 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.8182 12.8182L21 6L6 21L21 36L51 6L66 21L51 36L43.2727 28.7273"
                stroke="#f2f4f8"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Project's
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/reachme"
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Reach me!
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
