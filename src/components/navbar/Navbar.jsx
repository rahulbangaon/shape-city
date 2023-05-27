import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/ShapeCityLogo.png";
import hamburger from "../../assets/images/hamburger.svg";
import close from "../../assets/images/close.svg";
import { links } from "../../data";

import "./navbar.css";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [navToggler, setNavToggler] = useState(hamburger);

  return (
    <nav>
      <div className="container nav-container">
        {/* logo */}

        <Link
          to="/"
          onClick={() => {
            setIsNavActive(!isNavActive);
            setNavToggler(navToggler === hamburger ? close : hamburger);
          }}
        >
          <img className="logo" src={logo} alt="ShapeCity Logo" />
        </Link>

        {/* nav links */}
        <ul className={`nav-links ${isNavActive ? "show-nav" : "hide-nav"}`}>
          {links.map(({ name, path, index }) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => {
                    setIsNavActive(!isNavActive);
                    setNavToggler(navToggler === hamburger ? close : hamburger);
                  }}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* mobile toggler */}
        <button
          className="nav-toggler"
          onClick={() => {
            setIsNavActive(!isNavActive);
            setNavToggler(navToggler === hamburger ? close : hamburger);
          }}
        >
          <img src={navToggler} alt="Nav Toggler" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
