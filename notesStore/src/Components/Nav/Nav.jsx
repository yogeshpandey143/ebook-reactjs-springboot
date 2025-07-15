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

import { useAppContext } from "../../context/AppContext";

export default function Nav() {
  // useState  for navLink show and hide................

  const [isNavLinksShowing, setIsNavLinkShowing] = useState(false);
  const {navigate, user,showUserLogin , setUser, setShowUserLogin} = useAppContext();
  


  const logout =  async() => {
    setUser(null);
    navigate('/');
   
  }


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
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
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
            const handleClick = (e) => {
              if (item.type === "search") {
                console.log("Search clicked");
              } else if (item.type === "cart") {
                console.log("Cart clicked");
              } else if (item.type === "login" && !user) {
                setShowUserLogin(true);
               navigate("/login"); 
              }
            };
           if(item.type === "cart" && !user) return null;
          
           // If user is logged in and item is login, show dropdown

            
            if (item.type === "login" && user) {
              return (
                <div key={index} className="dropdown-container">
                  <div className="management-icons dropdown-trigger">
                    <item.icon />
                  </div>
                  <div className="dropdown-menu">
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>
                    <Link to="/my-orders" className="dropdown-item">
                      My Orders
                    </Link>
                    <Link onClick={logout} className="dropdown-item logout">
                      Logout
                    </Link>
                  </div>
                </div>
              );
            }

            // Default for other items
            return (
              <Link
                key={index}
                to={item.link}
                className="management-icons"
                onClick={handleClick}
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
