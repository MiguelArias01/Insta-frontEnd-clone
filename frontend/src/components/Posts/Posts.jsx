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
        <Post key={post.id} post={post} />
      ))}
      {endReached && <div className="text-center mt-6">You have reached the end!</div>}
    </div>
  );
}

export default Posts;
