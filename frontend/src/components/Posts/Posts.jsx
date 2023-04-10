import React, { useState, useEffect } from 'react';
import { getMainFeed, createComment } from '../../api/mainfeed';

function Post({ post, onSubmit }) {
  const [comment, setComment] = useState('');

  function handleSubmit() {
    onSubmit(post.id, comment)
  }

  return (
    <div className=" w-3/4 my-8">
      <div style={{ backgroundImage: `url(${post.image})`, backgroundPosition: "center", backgroundSize: "cover" }} className="pb-[100%] relative flex justify-center items-center rounded-sm mb-2">
      </div>
      <div className="w-full flex justify-between text-2xl mb-4">
        <div>
          <div className="hover:cursor-pointer hover:scale-110 inline-block pr-4">💛</div>
          <div className="hover:cursor-pointer hover:scale-110 inline-block pr-4">💩</div>
          <div className="hover:cursor-pointer hover:scale-110 inline-block">🔗</div>
        </div>
        <div className="hover:cursor-pointer hover:scale-110 inline-block">🗃️</div>
      </div>
      <div>
        <p>
          <span className="text-sm leading-[18px] font-sans font-semibold mb-2 pr-2 block">{post.liked_by.length === 1 ? post.liked_by.length + " like" : post.liked_by.length + " likes"}, {post.dislike_by.length === 1 ? post.dislike_by.length + " dislike" : post.dislike_by.length + " dislikes"}</span>
          <span className="text-sm leading-[18px] font-sans font-semibold mb-2 pr-2">{post.author.username}</span>
          <span className="text-sm leading-[18px] font-sans font-normal">{post.caption}</span>
        </p>
      </div>
      <div>
        {post.comments.map((comment, commentIndex) => (
          <div key={commentIndex}>
            <p>
              <span className="text-sm leading-[18px] font-sans font-semibold mb-2 pr-2">{comment.user.username}</span>
              <span className="text-sm leading-[18px] font-sans font-normal mb-2 pr-2">{comment.text}</span>
            </p>
            {/* <div>{comment.text}</div> */}
          </div>
        ))}
        <div className="flex">
          <input
            placeholder="Add a comment..."
            className="w-full py-2 text-sm leading-[18px] font-sans font-normal focus:outline-none"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <span onClick={handleSubmit} className="text-xl hover:cursor-pointer hover:scale-110">💬</span>
        </div>
      </div>
      <div className="border-b border-slate-200 mt-6"></div>
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
