// src/BookCard.js
import React from 'react';
import './Style.css';

function BookCard({ title, image, description }) {
  return (
    <div className="book-card">
      <img src={image} alt={`${title} cover`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Read</button>
      <button>Buy</button>
      <button>Download</button>
      <button>Save</button>
    </div>
  );
}

export default BookCard;
