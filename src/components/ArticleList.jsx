// src/components/ArticleList.jsx
import React from 'react';
import Article from './Article';

/**
 * ArticleList Component - Renders a list of Article components
 * @param {Object} props - Component props
 * @param {Array} props.posts - Array of post objects containing blog posts
 * @returns {JSX.Element} ArticleList component with multiple Article components
 */
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map(post => (
        <Article 
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;