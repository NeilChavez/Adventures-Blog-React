import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <div className="hero-image-opacity">
          <Button buttonStyle="btn--outline" buttonSize={"btn--large"}>
            <h1>Adventures Blog</h1>
          </Button>
        </div>
      </div>
    </section>
  );
}
