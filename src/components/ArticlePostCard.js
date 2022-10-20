import "./ArticlePostCard.css";

export default function ArticlePostCard({ textArticle }) {
  return (
    <article>
      <figure>
        <img src="https://placeimg.com/300/200/any" alt="dummy img" />
      </figure>
      <figcaption>
        <div>Data Articolo</div>
        <h5>{textArticle}</h5>
      </figcaption>
    </article>
  );
}
