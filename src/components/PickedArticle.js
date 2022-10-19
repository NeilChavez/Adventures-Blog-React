export default function PickedArticle() {
  return (
    <section>
      <div className="container">
        <h3>Titolo</h3>
        <article className="picked-article">
          <h4 className="picked-article-title">subtitle</h4>
          <p className="picked-aritcle-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            mollitia reprehenderit perspiciatis possimus ipsa fuga nihil
            corporis aspernatur atque, nostrum, expedita consequuntur ad
            obcaecati aut odio harum! Iste, at sed?
          </p>
          <figure className="picked-aritcle-figure">
            <img  className="icked-aritcle-image" src="./assets/citiesImages/barcelona01.jpeg" alt="titolo" />
          </figure>
        </article>
      </div>
    </section>
  );
}
