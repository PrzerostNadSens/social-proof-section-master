import "./Card.css";

import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="assets/images/illustration-article.svg" alt="Card graphic" />
      </div>
      <div className="card-content">
        <span className="card-tag">Learning</span>
        <span className="card-date">Published 21 Dec 2023</span>
        <a className="card-title">HTML & CSS foundations</a>
        <p className="card-description">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="card-author">
          <img
            src="assets/images/image-avatar.webp"
            alt="Author"
            className="author-image"
          />
          <span className="author-name">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
