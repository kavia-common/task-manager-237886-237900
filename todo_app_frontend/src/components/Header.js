import React from "react";
import { NavLink } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Application header with primary navigation.
 */
export default function Header() {
  return (
    <header className="appHeader">
      <div className="container headerInner">
        <div className="brand">
          <div className="brandMark" aria-hidden="true" />
          <span className="brandText">Todo App</span>
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <NavLink exact to="/" className="navLink" activeClassName="navLinkActive">
            Tasks
          </NavLink>
          <NavLink exact to="/about" className="navLink" activeClassName="navLinkActive">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
