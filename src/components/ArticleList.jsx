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
    <main style={styles.main}>
      <h2 style={styles.heading}>Latest Posts</h2>
      {posts.map(post => (
        <Article 
          key={post.id}  // Unique key for each article
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

// Inline styles for the ArticleList component
const styles = {
  main: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '0 20px',
    flex: 1
  },
  heading: {
    color: '#2c3e50',
    marginBottom: '20px',
    borderBottom: '2px solid #3498db',
    paddingBottom: '10px'
  }
};

export default ArticleList;