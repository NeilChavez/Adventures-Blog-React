
import { cities } from "../data/data-cities";
import CardPost from "./CardPost";
import "./Posts.css";

export default function Posts() {
  console.log(cities);
  return (
    <section className="posts-section container">
        {cities.map((city) => (
          <CardPost key={city.name} />
        ))}
    </section>
  );
}
