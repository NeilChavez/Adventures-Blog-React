import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import "../App.css";
import Button from "./Button";

export default function Navbar({ lastScrollY, setLastScroll }) {
  const [click, setclick] = useState(false);


  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);



  return (
    <header className="header">
      <Link to="/" className="link-logo" onClick={closeMobileMenu}>
        <b>Neil</b>
      </Link>
      <nav className={click ? "navbar active" : "navbar"}>
        <ul className="nav-list-items">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-icon" onClick={handleClick}>
        <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
      </div>
    </header>
  );
}
