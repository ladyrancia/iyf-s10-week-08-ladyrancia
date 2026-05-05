import { useState } from 'react'
import Layout from './components/Layout/Layout'
import CreatePost from './components/Post/CreatePost'
import PostList from './components/Post/PostList'
import Counter from './components/shared/Counter'
import Toggle from './components/shared/Toggle'
import ContactForm from './components/shared/ContactForm'
import Greeting from './components/shared/Greeting'
import Card from './components/shared/Card'
import { UserList } from './components/shared/UserList'
import Button from './components/shared/Button'
import './App.css'

function App() {
  // State for posts (lifted up for sharing between components)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to CommunityHub",
      content: "This is your new community platform. Share your thoughts, ask questions, and connect with others!",
      author: "Admin",
      date: "May 5, 2026",
      likes: 0
    },
    {
      id: 2,
      title: "Getting Started with React",
      content: "React makes it easy to create interactive UIs. Learn the basics and start building today!",
      author: "John Doe",
      date: "May 4, 2026",
      likes: 5
    }
  ]);

  // Add new post
  const handleAddPost = (newPost) => {
    setPosts(prev => [
      {
        ...newPost,
        id: Date.now(),
        likes: 0
      },
      ...prev
    ]);
  };

  // Like post
  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  // Delete post
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // Calculate stats
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  return (
    <Layout>
      <div className="dashboard">
        <section className="section">
          <h2>CommunityHub Dashboard</h2>
          <p>Total Posts: {posts.length} | Total Likes: {totalLikes}</p>
        </section>

        <section className="section">
          <h2>Exercise: useState & Events</h2>
          <div className="demos">
            <div className="demo-box">
              <h4>Counter (useState)</h4>
              <Counter />
            </div>
            <div className="demo-box">
              <h4>Toggle (useState)</h4>
              <Toggle />
            </div>
            <div className="demo-box">
              <h4>Contact Form (useState)</h4>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Create Post</h2>
          <CreatePost onSubmit={handleAddPost} />
        </section>

        <section className="section">
          <h2>Posts ({posts.length})</h2>
          <PostList posts={posts} onLike={handleLike} onDelete={handleDelete} />
        </section>

        <section className="section">
          <h2>Daily Challenges</h2>
          <div className="demos">
            <div className="demo-box">
              <h4>Day 1: Greeting Component</h4>
              <Greeting name="Student" timeOfDay="morning" />
              <Greeting name="Friend" timeOfDay="afternoon" />
              <Greeting name="Colleague" timeOfDay="evening" />
              <Greeting />
            </div>

            <div className="demo-box">
              <h4>Day 2: Card with Props</h4>
              <Card title="Primary Card" variant="primary">
                <p>This is a primary variant card with custom content.</p>
              </Card>
              <Card title="Secondary Card" variant="secondary">
                <p>This card uses the secondary style.</p>
              </Card>
              <Card title="Outlined Card" variant="outlined">
                <p>An outlined card with border only.</p>
              </Card>
            </div>

            <div className="demo-box">
              <h4>Day 3: User List with Keys</h4>
              <UserList users={[
                { id: 1, name: "Alice", email: "alice@example.com" },
                { id: 2, name: "Bob", email: "bob@example.com" },
                { id: 3, name: "Charlie", email: "charlie@example.com" }
              ]} />
            </div>

            <div className="demo-box">
              <h4>Day 4: Reusable Button</h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button text="Primary" variant="primary" />
                <Button text="Secondary" variant="secondary" />
                <Button text="Danger" variant="danger" />
                <Button text="Small" size="small" />
                <Button text="Large" size="large" />
                <Button text="Disabled" disabled />
                <Button text="Loading" loading />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App
