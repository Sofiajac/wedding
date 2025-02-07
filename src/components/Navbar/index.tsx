import React from "react";
import "./styles.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* <a>Välkommen</a>
      <a>Program</a>
      <a>Resa hit</a>
      <a>FAQ</a> */}

      <ul>
        <li>
          <NavLink to="/">Välkommen</NavLink>
        </li>
        <li>
          <NavLink to="/program">Program</NavLink>
        </li>
        <li>
          <NavLink to="/travel">Resa hit</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
