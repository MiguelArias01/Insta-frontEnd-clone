import React, { useState, useEffect } from 'react';
import { getMainFeed, createComment } from '../../api/mainfeed';
import LikeDislikeButtons from '../Likes/like';

function Post({ post, onSubmit }) {
  const [comment, setComment] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(post.id, comment);
    setComment('');
  }

  return (
    <div className="border rounded-md shadow-md overflow-hidden w-4/12 m-8">
      <img className="object-cover h-64 w-full" src={post.image} alt={post.caption} />
      <div className="p-4">
        <h2 className="text-sm font-sans font-medium mb-2">{post.caption}</h2>
        <p className="text-gray-600">
          Author: {post.author.profile.firstName} {post.author.profile.lastName}
        </p>
      </div>
      <LikeDislikeButtons postId={post.id} userId={post.author.id} />
      <div>
        {post.comments.map((comment, commentIndex) => (
          <div className="flex justify-center" key={commentIndex}>
            <div>{comment.text}</div>
          </div>
        ))}


        <form onSubmit={handleSubmit}>
          <input
            className="w-full py-2 px-4 border border-gray-300 rounded-md"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600" type="submit">
            Post comment
          </button>
        </form>
      </div>
    </div>
  );
}


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

  async function handleSubmitComment(postId, commentText) {
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
      {data.map((post) => (
        <Post key={post.id} post={post} onSubmit={handleSubmitComment} />
      ))}
      {endReached && <div className="text-center mt-6">You have reached the end!</div>}
    </div>
  );
}

export default Posts;