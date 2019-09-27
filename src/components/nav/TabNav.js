import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function TabNav() {
  return (
    <div>
      <Nav tabs="true" className="navTab">
        <NavLink
          className="link"
          exact
          to="/dashboard"
          activeClassName="selected"
        >
          <strong>My Passport</strong>
        </NavLink>

        <NavLink
          className="link"
          to="/dashboard/visit"
          activeClassName="selected"
        >
          <strong>Visited</strong>
        </NavLink>
      </Nav>
    </div>
  );
}

export default TabNav;
