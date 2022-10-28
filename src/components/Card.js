import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link className="card">
      <img src="https://placeimg.com/640/480/any" alt="test" />
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
