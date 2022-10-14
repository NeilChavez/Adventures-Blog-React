import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";

export default function HeroSection({ urlImageHero }) {
  let stylesImg = {
    backgroundImage: `url(${urlImageHero})`,
    backgroundPosition: "50% 75%",
    backgroundSize: "cover",
    border: "thick solid green",
    width: "100%",
    height: "100%",
    zIndex: "-1",
  };

  return (
    <section className="hero-section">
      <div className="hero-image" style={stylesImg}>
        <div className="hero-image-opacity">
          <Button buttonStyle="btn--outline" buttonSize={"btn--large"}>
            <h1>Adventures Blog</h1>
          </Button>
        </div>
      </div>
    </section>
  );
}
