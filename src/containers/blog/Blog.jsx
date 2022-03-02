import React from "react";
import Article from "../../components/article/Article";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  wordle,
  snake,
  music,
  todo,
  tetris,
  pokedex,
  memories,
  connectfour,
  tetris2,
} from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A selection of stuff I've built</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={music}
          date="Music Player"
          text="A music player that only plays my band, Between Skies, debut EP 'Horizons'. Created using vanilla Javascript"
          button="Check it out!"
          link="www.google.com"
          linkText="Hi"
        />
        <Article
          imgUrl={tetris}
          date="Tetris"
          text="A clone of the popular game Tetris. The speed of the game increases with the more rows you are able to get rid of. Created using React"
          button="Check it out!"
        />
        <Article
          imgUrl={wordle}
          date="Wordle Clone"
          text="A clone of the New York Times game Wordle. Created using vanilla Javascript"
          button="Check it out!"
        />
        <Article
          imgUrl={memories}
          date="MERN Memories"
          text="A full stack application where the user can upload, delete, and edit photos. Created using MongoDB, Express.js, React, and Node.js"
          button="Check it out!"
        />
        <Article
          imgUrl={todo}
          date="Todo list"
          text="A checklist app where the user can add, edit, or delete tasks, and organize them by category. Created using React"
          button="Check it out!"
        />
        <Article
          imgUrl={pokedex}
          date="Pokedex"
          text="A pokedex app that fetches data from an API and displays all of the pokemon information for the user. Created using vanilla Javascript"
          button="Check it out!"
        />
      </div>
    </div>
  </div>
);

export default Blog;
