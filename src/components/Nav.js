import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <Link to={`/`}>All</Link>
    <Link to={`/add`}>Add</Link>
  </nav>
);

export default Nav;
