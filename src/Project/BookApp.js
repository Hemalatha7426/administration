// src/BookApp.js
import React from 'react';
import BookCard from './BookCard';
import './Style.css';

function BookApp() {
  const books = [
    { title: 'Book 1', image: 'https://via.placeholder.com/100x150', description: 'Description of Book 1' },
    { title: 'Book 2', image: 'https://via.placeholder.com/100x150', description: 'Description of Book 2' },
    // Add more books here
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to the Book App</h1>
        <nav>
          <ul>
            <li>Read</li>
            <li>Buy</li>
            <li>Download</li>
            <li>Save</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="book-list">
          <h2>Available Books</h2>
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              image={book.image}
              description={book.description}
            />
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Book App</p>
      </footer>
    </div>
  );
}

export default BookApp;

