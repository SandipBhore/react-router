import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div id="Nav">
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link> */}

      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>

      <NavLink to={"/product"}>Products</NavLink>
    </div>
  );
}

export default Navbar;
