import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';
import './App.css';

/**
 * App Component - Main application component that orchestrates the entire blog
 * @returns {JSX.Element} Complete blog application
 */
function App() {
  return (
    <div className="App" style={styles.app}>
      {/* Header component receives blog name as prop */}
      <Header name={blogData.name} />
      
      {/* About component receives image and about text as props */}
      <About 
        image={blogData.image}
        about={blogData.about}
      />
      
      {/* ArticleList component receives array of posts as prop */}
      <ArticleList posts={blogData.posts} />
      
      {/* Footer section */}
      <footer style={styles.footer}>
        <p>&copy; 2024 {blogData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Inline styles for the App component
const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f5f6fa'
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px'
  }
};

export default App;