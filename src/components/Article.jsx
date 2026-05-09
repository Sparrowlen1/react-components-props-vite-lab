// src/components/Article.jsx
import React from 'react';

/**
 * Article Component - Displays a single blog post
 * @param {Object} props - Component props
 * @param {string} props.title - Title of the article
 * @param {string} props.date - Publication date of the article
 * @param {string} props.preview - Preview text/summary of the article
 * @returns {JSX.Element} Article component
 */
function Article({ title, date = "January 1, 2024", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;