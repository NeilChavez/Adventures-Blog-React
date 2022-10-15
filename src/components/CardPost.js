import "./CardPost.css";
import DateField from "./DateField";
import { Link } from "react-router-dom";
import {capitalizeCity} from "../services/capitalizeCity"

export default function CardPost({
  country,
  department,
  info,
  name,
  population,
  region,
  thumbnails,
}) {

  let cityCapitalized = capitalizeCity(name)
  let thumbnailsUrl = `/assets/citiesImages/${name}01.jpeg`
  return (
    <Link to={`city/${name}`}>
      <figure className="card-post">
        <img
          className="card-image"
          src={thumbnailsUrl}
          alt={name}
        />
        <figcaption className="card-description">
          <h3 className="card-title">{cityCapitalized}</h3>
          <p className="card-paragraph">
          {info}
          </p>
        </figcaption>
        <DateField date={"22-08-2022"} />
      </figure>
    </Link>
  );
}
