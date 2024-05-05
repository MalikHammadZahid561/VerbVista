import React from 'react';
import "./Templates.css";
const articles = [
  {
    title: 'What Is a Malapropism?',
    excerpt: 'Examples & Definition',
    date: 'April 15, 2024'
  },
  {
    title: 'Best Al Detector Tools',
    excerpt: 'Free & Premium Tools Tested',
    date: 'February 26, 2024'
  },
  {
    title: 'What Is Belief Bias? | Self-Fulfilling Prophecy',
    excerpt: 'Definition & Examples',
    date: 'October 7, 2023'
  },
  {
    title: 'Rhetoric Using Al tools',
    excerpt: 'Research bias',
    date: 'October 4, 2023'
  }
];

function Article({ title, excerpt, date }) {
  return (
    <article className="article">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <span>{date}</span>
    </article>
  );
}

function App() {
  return (
    <div className="container">
      <h2>Latest articles</h2>
      <div className="articles">
        {articles.map(article => (
          <Article key={article.title} {...article} />
        ))}
      </div>
    </div>
  );
}

export default App;
