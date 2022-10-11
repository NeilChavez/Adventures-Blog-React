import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };

  const closeMobileMenu = () => setclick(false);
  return (
    <header className="header">
      <Link to="/" className="link-logo">
        <b>Neil</b>
      </Link>
      <div className="navbar">
        <div className="navbar-icon" onClick={handleClick}>
          <i className={click ? "none" : "fa-solid fa-bars"}></i>
          <i className={click ? "fa-solid fa-x" : "none"}></i>
        </div>
      </div>
      <nav>
        <ul>
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
            <Link to="/products" className="nav-ink" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-link-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
