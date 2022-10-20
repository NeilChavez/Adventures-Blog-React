import "./PickedArticle.css";

export default function PickedArticle() {
  return (
    <section className="section-picked-article">
      <div className="container">
        <h3 className="picked-article-title">Editor's picked
</h3>
        <article className="picked-article">
          <div className="picked-article-wrapper">
            <h4 className="picked-article-subtitle">Titolo dell'articolo che va qua sotto</h4>
            <p className="picked-aritcle-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
              mollitia reprehenderit perspiciatis possimus ipsa fuga nihil
              corporis aspernatur atque, nostrum, expedita consequuntur ad
              obcaecati aut odio harum! Iste, at sed?
            </p>
          </div>
          <figure className="picked-aritcle-figure">
            <img
              className="picked-aritcle-image"
              src="./assets/citiesImages/barcelona01.jpeg"
              alt="titolo"
            />
          </figure>
        </article>
      </div>
    </section>
  );
}
