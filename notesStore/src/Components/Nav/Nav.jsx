import React from "react";

// import Nav.css................

import "./Nav.css";

// import  Router Link..............

import { Link, NavLink } from "react-router-dom";

// import  Logo................

import Logo from "../../assets/logo.png";

// import  NavData................

import { navLinks, navRight } from "../../Data/Data";

// import  MenuButton................
import { VscMenu } from "react-icons/vsc";

// import  closeButton................
import { TfiClose } from "react-icons/tfi";

// import  useState................

import { useState } from "react";

export default function Nav() {
  // useState  for navLink show and hide................

  const [isNavLinksShowing, setIsNavLinkShowing] = useState(false);

  // Window Scroll Nav-Links Effect................
  if (innerWidth < 1024) {
    window.addEventListener("scroll", () => {
      document.querySelector(".nav-links").classList.add("navLinksHide");

      setIsNavLinkShowing(false);
    });
  }

  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("navShow", window.scrollY > 0);

    setIsNavLinkShowing(false);
  });
  return (
    <nav>
      <div className="container nav-container">
        {/*...........logo........*/}

        <Link to={"/"} className="logo">
          <img src={Logo} alt="Logo" />
        </Link>

        {/*...........Nav-Links.......*/}
        <ul
          className={`nav-links ${
            isNavLinksShowing ? "navLinksShow" : "navLinksHide"
          }`}
        >
          {navLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/*...........nav-right.......*/}

        <div className="nav-right">
          {navRight.managements.map((item, index) => {
            return (
              <Link
                key={index}
                // target="_blank"
                className="management-icons"
                to={item.link}
              >
                <item.icon />
              </Link>
            );
          })}

          <div className="menu-bar">
            <button
              className="menu-button btn"
              onClick={() => setIsNavLinkShowing(!isNavLinksShowing)}
            >
              {!isNavLinksShowing ? <VscMenu /> : <TfiClose />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
