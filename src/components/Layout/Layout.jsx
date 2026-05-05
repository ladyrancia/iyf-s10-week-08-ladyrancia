function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <main className="main-content">{children}</main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

// Import child components for layout
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default Layout;
