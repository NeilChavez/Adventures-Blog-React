import RecentPosts from "./RecentPosts";
import SmallCard from "./SmallCard";
import "./SectionRecentPosts.css";

let titles = [
  "Our best breakfast in holidays",
  "Fragments of our trip on Mountains",
  "How to find best place for trip",
];
let articles = [
  "Back Home After Trip with Friends",
  "First Real Attempt at Ballet Dance",
  "Winning Makes me More Humble",
];

export default function SectionRecentPosts() {
  return (
    <div className="section-recent-post-wrapper">
      <section className="section-recent-post container">
        <RecentPosts>
          <h1 className="author-title">Author</h1>
          <p className="author-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            placeat natus consequuntur aliquid sapiente porro distinctio quam
            tempora cum veritatis a exercitationem, neque sint iste doloremque
            fuga voluptatum harum? Architecto.
          </p>
        </RecentPosts>
        <RecentPosts>
          {titles.map((title) => {
            return <SmallCard key={title}></SmallCard>;
          })}
        </RecentPosts>
        <RecentPosts>
          {articles.map((article) => {
            return <SmallCard key={article}></SmallCard>;
          })}
        </RecentPosts>
      </section>
    </div>
  );
}
