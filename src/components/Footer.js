import "./Footer.css";
import { Link } from "react-router-dom";

const categories = ["About", "Partnerships", "Contact", "Privacy"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper container-m">
        <div className="footer-nav">
          <Link to="/" className="link-logo">
            <b>Neil</b>
          </Link>
          <ul className="footer-nav-list">
            {categories.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
        <div className="footer-icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </div>
    </footer>
  );
}
