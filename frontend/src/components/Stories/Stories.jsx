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
    thumbnail: "https://source.unsplash.com/random/200x200?sig=3234",
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
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=10",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=20",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=93",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=34",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=544",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=65",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=47",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=834",
  },
  {
    thumbnail: "https://source.unsplash.com/random/200x200?sig=943",
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
