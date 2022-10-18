import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import "../App.css";
import Button from "./Button";

export default function Navbar({ lastScrollY, setLastScroll }) {
  const [click, setclick] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
      console.log(lastScrollY)
      setLastScroll(window.scrollY);
    if (lastScrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }

  };
  useEffect(() => {
    getWindowWidth();
    controlNavbar();
  }, [lastScrollY]);

  const getWindowWidth = (e) => {
    if (window.innerWidth > 760) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);

  window.addEventListener("resize", (e) => {
    getWindowWidth();
  });
  window.addEventListener("scroll", controlNavbar);


  return (
    <header className={`${show ? "header" : "header fade-out"}`}>
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
          <li className="nav-item mobile">
            <Link
              to="/sign-up"
              className="nav-link-mobile"
              onClick={closeMobileMenu}
            >
              Sing In
            </Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-icon" onClick={handleClick}>
        <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
      </div>
      {!isMobile && (
        <Button buttonStyle="btn--primary" buttonSize="btn--medium" textBtn="Sing-up">
          <p>Sing In</p>
        </Button>
      )}
    </header>
  );
}
