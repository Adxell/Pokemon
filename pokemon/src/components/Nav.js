import React from "react";
import logo from "../img/pokeapi_256.png";
const Navbar = () => {
  return (
    <nav className="nav-bar">
        <div>
          <img src={logo} alt="logo" className="nav-img" />
        </div>
        <div className="nav-bar-heart">❤</div>
    </nav>
  );
};
export default Navbar;
