import "./SmallCard.css";

export default function SmallCard() {
  return (
    <article className="small-card">
      <figure className="small-card-figure">
        <img className="small-card-img" src="https://placeimg.com/150/150/any" alt="dummy" />
      </figure>
      <figcaption className="small-card-description">
        <h3>Our best breakfast in holidays</h3>
        <p>Data</p>
      </figcaption>
    </article>
  );
}
