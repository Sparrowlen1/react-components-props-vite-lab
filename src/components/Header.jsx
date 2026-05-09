// src/components/Header.jsx
import React from 'react';

/**
 * Header Component - Displays the blog header with the blog name
 * @param {Object} props - Component props
 * @param {string} props.name - The name of the blog to display
 * @returns {JSX.Element} Header component
 */
function Header({ name }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{name}</h1>
    </header>
  );
}

// Inline styles for the Header component
const styles = {
  header: {
    backgroundColor: '#2c3e50',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '4px solid #3498db'
  },
  title: {
    color: 'white',
    margin: 0,
    fontSize: '2.5rem'
  }
};

export default Header;