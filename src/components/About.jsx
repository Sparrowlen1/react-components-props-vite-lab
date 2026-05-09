// src/components/About.jsx
import React from 'react';

/**
 * About Component - Displays blog information and logo
 * @param {Object} props - Component props
 * @param {string} props.image - URL/path to the blog logo image
 * @param {string} props.about - Description text about the blog
 * @returns {JSX.Element} About component
 */
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img 
        src={image} 
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;