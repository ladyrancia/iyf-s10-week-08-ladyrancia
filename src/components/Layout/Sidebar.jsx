function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <h3>About</h3>
        <p>Welcome to CommunityHub - a place to share ideas and connect with others.</p>
      </section>
      <section className="sidebar-section">
        <h3>Popular Posts</h3>
        <ul className="popular-posts">
          <li>Getting Started with React</li>
          <li>JavaScript Best Practices</li>
          <li>Building Modern UIs</li>
        </ul>
      </section>
      <section className="sidebar-section">
        <h3>Tags</h3>
        <div className="tags">
          <span className="tag">react</span>
          <span className="tag">javascript</span>
          <span className="tag">web-dev</span>
          <span className="tag">tutorial</span>
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;
