import "./ArticlePostCard.css";

export default function ArticlePostCard({ textArticle }) {
  return (
    <article className="article-post">
      <figure className="article-figure">
        <img src="https://placeimg.com/300/200/any" className="article-image"alt="dummy img" />
      </figure>
      <figcaption className="article-figcaption">
        <div className="article-date">22 August</div>
        <h5 className="article-title">{textArticle}</h5>
      </figcaption>
      <div className="article-tag">Category</div>
    </article>
  );
}
