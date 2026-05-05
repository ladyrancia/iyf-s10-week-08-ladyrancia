import PostCard from './PostCard';

function PostList({ posts, onLike, onDelete }) {
  if (posts.length === 0) {
    return <p className="empty-message">No posts yet. Be the first to create one!</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.content}
          author={post.author}
          date={post.date}
          likes={post.likes}
          onLike={() => onLike(post.id)}
          onDelete={() => onDelete(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;
