import React from "react";
import "../App.css";
import HeroImage from "./HeroImage";
import "./HeroSection.css";

export default function HeroSection({ urlImageHero }) {

  return (
    <section className="hero-section">
       <HeroImage urlImageHero={urlImageHero}/>
    </section>
  )
}
