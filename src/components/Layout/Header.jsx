function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">CommunityHub</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#posts">Posts</a>
          <a href="#about">About</a>
        </nav>
        <button className="btn btn-primary">Login</button>
      </div>
    </header>
  );
}

export default Header;
