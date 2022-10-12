import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
import "../App.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZE = ["btn--medium", "btn--large"];

export default function Button({ children, buttonStyle, buttonSize }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <Link
      to="/sign-up"
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    >
      {children}
    </Link>
  );
}
