// src/components/App.jsx
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

/**
 * App Component - Main application component that orchestrates the entire blog
 * @returns {JSX.Element} Complete blog application
 */
function App() {
  return (
    <div>
      <Header name={blogData.name} />
      <About 
        image={blogData.image}
        about={blogData.about}
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;