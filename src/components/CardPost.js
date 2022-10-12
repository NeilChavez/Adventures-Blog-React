import "./CardPost.css";
import DateField from "./DateField";
import { Link } from "react-router-dom";

export default function CardPost() {
  return (
    <Link to="/:city">
      <figure className="card-post">
        <img
          className="card-image"
          src="https://www.placeimg.com/300/304/any"
          alt="random"
        />
        <figcaption className="card-description">
          <h3 className="card-title">Titolo</h3>
          <p className="card-paragraph">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.¯
          </p>
        </figcaption>
        <DateField date={"22-08-2022"} />
      </figure>
    </Link>
  );
}
