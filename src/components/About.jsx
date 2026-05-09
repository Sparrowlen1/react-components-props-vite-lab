import React from 'react';

/**
 * About Component - Displays blog information and logo
 * @param {Object} props - Component props
 * @param {string} props.image - URL/path to the blog logo image
 * @param {string} props.about - Description text about the blog
 * @returns {JSX.Element} About component
 */
function About({ image, about }) {
  return (
    <aside style={styles.aside}>
      <img 
        src={image} 
        alt="blog logo" 
        style={styles.image}
      />
      <p style={styles.text}>{about}</p>
    </aside>
  );
}

// Inline styles for the About component
const styles = {
  aside: {
    backgroundColor: '#ecf0f1',
    padding: '20px',
    margin: '20px',
    borderRadius: '8px',
    textAlign: 'center'
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px'
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#34495e',
    maxWidth: '600px',
    margin: '0 auto'
  }
};

export default About;