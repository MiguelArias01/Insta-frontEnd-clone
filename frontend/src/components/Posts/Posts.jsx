import React, { useState, useEffect } from 'react';
import { getMainFeed, createComment } from '../../api/mainfeed';
import Post from './Post'

function Posts() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [endReached, setEndReached] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const newData = await getMainFeed(page);
      if (newData.length === 0) {
        setEndReached(true);
      } else {
        setData((prevData) => prevData.concat(newData));
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight &&
      !endReached
    ) {
      fetchData();
    }
  }

  async function handleSubmit(e, postIndex, postarray) {
    e.preventDefault();
    let postId = postarray[postIndex].id;

    const newComment = {
      comment: commentText,
      post_id: postId,
      user_id: localStorage.getItem('id'),
    };
    await createComment(newComment);
    setData((prevData) => {
      const newData = [...prevData];
      const postIndex = newData.findIndex((post) => post.id === postId);
      newData[postIndex].comments = [...newData[postIndex].comments, newComment];
      return newData;
    });
  }

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !endReached) {
      fetchData();
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [endReached]);

  return (
    <div className="flex flex-col items-center">
      {data.map((item, index, array) => (
        <div className="border rounded-md shadow-md overflow-hidden w-4/12 m-8" key={index}>
          <img className="object-cover h-64 w-full" src={item.image} alt={item.caption} />
          <div className="p-4">
            <h2 className="text-lg font-medium mb-2">{item.caption}</h2>
            <p className="text-gray-600">
              Author: {item.author.profile.firstName} {item.author.profile.lastName}
            </p>
          </div>
          <div>
            {item.comments.map((comment, commentIndex) => (
              <div className="flex justify-center" key={commentIndex}>
                {comment.text}
              </div>
            ))}
            <form onSubmit={(e) => handleSubmit(e, index, array)}>
              <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Add a comment..." />
              <button className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600" type="submit">Post</button>
            </form>
          </div>
        </div>
      ))}
      {endReached && <div className="text-center mt-6">You have reached the end!</div>}
    </div>
  );
}

export default Posts;
