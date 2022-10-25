import React from "react";
import "../App.css";
import "./HeroSection.css";
import ArticlePostCard from "./ArticlePostCard";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <article className="hero-grid">
        <ArticlePostCard
          textArticle="Titulo en el hero"
          img={"./assets/citiesImages/venezia02.jpeg"}
        />
        <div>
          <ArticlePostCard
            textArticle="Titulo en el hero"
            img={"./assets/citiesImages/venezia02.jpeg"}
          />
          <ArticlePostCard
            textArticle="Titulo en el hero"
            img={"./assets/citiesImages/venezia02.jpeg"}
          />
        </div>
      </article>
    </section>
  );
}
