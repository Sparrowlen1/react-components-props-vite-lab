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
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;