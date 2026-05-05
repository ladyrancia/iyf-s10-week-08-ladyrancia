function PostCard({ title, excerpt, author, date, onLike, onDelete, likes = 0 }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div className="post-meta">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
      <div className="post-actions">
        <button className="like-btn" onClick={onLike}>
          ❤️ {likes}
        </button>
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default PostCard;
