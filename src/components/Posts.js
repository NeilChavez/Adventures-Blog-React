import { cities } from "../data/data-cities";
import CardPost from "./CardPost";
import "./Posts.css";

export default function Posts() {
  console.log(cities);

  return (
    <section className="posts-section container">
      {cities.map(
        ({
          country,
          department,
          info,
          name,
          population,
          region,
          thumbnails,
        }) => (
          <CardPost
            key={population}
            country={country}
            department={department}
            info={info}
            name={name}
            population={population}
            region={region}
            thumbnails={thumbnails}
          />
        )
      )}
    </section>
  );
}
