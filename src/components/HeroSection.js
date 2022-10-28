import React from "react";
import "../App.css";
import "./HeroSection.css";
import RecentPosts from "./RecentPosts";
import SmallCard from "./SmallCard";
import Card from "./Card"

let articles = [
  "Back Home After Trip with Friends",
  "First Real Attempt at Ballet Dance",
  "Winning Makes me More Humble",
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <article className="hero-grid">
      <Card/>
      </article>
      <RecentPosts>
        {articles.map((article) => {
          return <SmallCard key={article}></SmallCard>;
        })}
      </RecentPosts>
    </section>
  );
}
