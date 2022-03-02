import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text, button, link, linkText }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p className="gradient__text">{date}</p>
        <h3>{text}</h3>
        <div className="gpt3__header-content__input">
          <a href={link} linkText={linkText}></a>
          <button type="button">{button}</button>
        </div>
      </div>
    </div>
  </div>
);

export default Article;
