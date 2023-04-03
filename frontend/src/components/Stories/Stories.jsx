import React from "react";
import "./Stories.css";

const stories = [
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=1",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=2",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=3",
  },
      {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=4",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=5",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=6",
  },
      {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=7",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=8",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=9",
  },
];

function Stories() {
  return (
    <div className="stories-container">
      <div className="stories-thumbnails">
        {stories.map(story => (
          <div key={stories.indexOf(story)} className="stories-thumbnail" style={{backgroundImage: `url("${story.thumbnail}")`}}>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
