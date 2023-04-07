import React, { useEffect, useState } from "react";
import { getUser, getMainFeed } from "../../api/mainfeed";

function Stories() {
  const [stories, setStories] = useState([]);

  async function fetchStories() {
    const user = await getMainFeed();
    const fetchedStories = user.map((story) => ({
      profileImage: story.image,
      username: story.author.username,
    }));
    setStories(fetchedStories);
  }

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="scrollbar-hide overflow-scroll flex flex-col items-center mt-14 mr-[25%] ml-[25%] ">
      <div className="flex mt-6 mb-3.5  justify-center w-50 pl-56">
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative w-14 h-14 mr-2 mb-2 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 cursor-pointer"
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full filter brightness-75 border-1 "
              src={story.profileImage}
              alt="story"
              onLoad={() => setStories([...stories])}
            />
              <div className="mt-14 flex justify-center">{story.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
