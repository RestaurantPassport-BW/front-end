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
          <strong>Home</strong>
        </NavLink>

        <NavLink
          className="link"
          to="/dashboard/passport"
          activeClassName="selected"
        >
          <strong>Passports</strong>
        </NavLink>

        <NavLink
          className="link"
          to="/dashboard/visit"
          activeClassName="selected"
        >
          <strong>My Passports</strong>
        </NavLink>
      </Nav>
    </div>
  );
}

export default TabNav;
