import React, { useEffect, useState } from "react";
import { getUser, getMainFeed } from "../../api/mainfeed";
import { Link } from "react-router-dom";

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
    <div className=" scrollbar-hide overflow-scroll flex flex-col items-center mt-12 h-auto w-10/12 py-0 pl-12 mx-auto">
      <div className="flex mt-6 mb-3.5  justify-center w-50 pl-56">
        {stories.map((story, index) => (
          <div key={index} className="relative w-14 h-14 mr-4 my-6 rounded-full hover:cursor-pointer hover:scale-110">
            <Link to={`/${story.username}`}>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-full filter brightness-75 border-1 "
                src={story.profileImage}
                alt="story"
                onLoad={() => setStories([...stories])}
              />
            </Link>
            <div className="mt-16 flex justify-center">
              <span className="font-normal font-sans text-xs">{story.username}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
