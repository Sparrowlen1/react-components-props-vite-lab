// src/data/blog.js
const blogData = {
  name: "Sparrow's Dev Blog",
  image: "https://via.placeholder.com/215",  // Use placeholder image
  about: "Welcome to my personal blog where I share my journey in web development, React tips, and programming insights. Join me as I explore the world of modern web technologies!",
  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "January 15, 2024",
      preview: "React has revolutionized the way we build web applications. In this article, I'll walk you through the basics of React including components, props, and state management..."
    },
    {
      id: 2,
      title: "Understanding Props in React",
      date: "January 20, 2024",
      preview: "Props are essential for passing data between components. Learn how to effectively use props to create reusable and dynamic React components..."
    },
    {
      id: 3,
      title: "Building Your First Component",
      date: "January 25, 2024",
      preview: "Components are the building blocks of React applications. Discover how to create functional components and structure your React app efficiently..."
    },
    {
      id: 4,
      title: "Styling in React Applications",
      date: "February 1, 2024",
      preview: "From CSS modules to styled-components, explore different approaches to styling your React applications and find what works best for your projects..."
    }
  ]
};

export default blogData;