import "./RecentPosts.css";
export default function RecentPosts({ children }) {
  return (
    <div className="card-preview-post">
      <div className="card-title-wrapper">
        <h2 className="card-preview-title">Titolo</h2>
      </div>
      {children}
    </div>
  );
}
