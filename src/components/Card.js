import { Link } from "react-router-dom";
import "./Card.css"
export default function Card() {
  return (
    <Link className="card">
      <img className=".card-image-component" src="./assets/citiesImages/torino03.jpeg" alt="test" />
      <span className="card-category">Category</span>
      <div className="card-data-container">
        <div className="card-data">
            <span>28 oct 2022</span>
            <span className="card-data-spacer"></span>
            <span>8 min Read</span>
        </div>
        <div className="card-title title">Titolo</div>
      </div>
    </Link>

  );
}
