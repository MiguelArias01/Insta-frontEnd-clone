import React from "react";

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
  },{
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
    <div className="scrollbar-hide overflow-scroll flex flex-col items-center mt-14 mr-[25%] ml-[25%] ">
      <div className="flex mt-6 mr-20 ml-20 justify-center w-50">
        {stories.map((story) => (
          <div
            key={story.thumbnail}
            className="relative w-14 h-14 mr-2 mb-2 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 cursor-pointer"
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full filter brightness-75"
              src={story.thumbnail}
              alt="story"
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Stories;
