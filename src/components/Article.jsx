import React from 'react';

/**
 * Article Component - Displays a single blog post
 * @param {Object} props - Component props
 * @param {string} props.title - Title of the article
 * @param {string} props.date - Publication date of the article
 * @param {string} props.preview - Preview text/summary of the article
 * @returns {JSX.Element} Article component
 */
function Article({ title, date, preview }) {
  return (
    <article style={styles.article}>
      <h3 style={styles.title}>{title}</h3>
      <small style={styles.date}>{date}</small>
      <p style={styles.preview}>{preview}</p>
      <hr style={styles.divider} />
    </article>
  );
}

// Inline styles for the Article component
const styles = {
  article: {
    backgroundColor: 'white',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease'
  },
  title: {
    color: '#2c3e50',
    marginTop: 0,
    marginBottom: '10px'
  },
  date: {
    color: '#7f8c8d',
    display: 'block',
    marginBottom: '15px',
    fontSize: '0.9rem'
  },
  preview: {
    color: '#34495e',
    lineHeight: '1.6',
    marginBottom: '15px'
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #ecf0f1',
    margin: '10px 0 0 0'
  }
};

export default Article;