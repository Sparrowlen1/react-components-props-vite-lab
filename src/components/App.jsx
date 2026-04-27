import React from "react";
import blogData from "../data/blog";

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

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

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;