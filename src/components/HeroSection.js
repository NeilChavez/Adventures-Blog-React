import React from "react";
import "../App.css";
import "./HeroSection.css";
import ArticlePostCard from "./ArticlePostCard";
import RecentPosts from "./RecentPosts";
import SmallCard from "./SmallCard";

let articles = [
  "Back Home After Trip with Friends",
  "First Real Attempt at Ballet Dance",
  "Winning Makes me More Humble",
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <article className="hero-grid">
        <ArticlePostCard
          textArticle="Titulo en el hero"
          img={"./assets/citiesImages/venezia02.jpeg"}
        />

        <ArticlePostCard
          textArticle="Titulo en el hero"
          img={"./assets/citiesImages/venezia02.jpeg"}
        />
        <ArticlePostCard
          textArticle="Titulo en el hero"
          img={"./assets/citiesImages/venezia02.jpeg"}
        />
      </article>
      <RecentPosts>
        {articles.map((article) => {
          return <SmallCard key={article}></SmallCard>;
        })}
      </RecentPosts>
    </section>
  );
}
