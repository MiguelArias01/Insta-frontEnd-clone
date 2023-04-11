import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { createComment } from '../../api/mainfeed';

export default function Post({ post, onSubmit }) {
  const [comment, setComment] = useState('');
  console.log(post.comments);

  function handleSubmit() {
    if (comment !== "") {
      onSubmit(post.id, comment)
    }
  }

  async function handleSubmitComment(postId, commentText) {
    const newComment = {
      comment: commentText,
      post_id: postId,
      user_id: localStorage.getItem('id'),
    };
    const res = await createComment(newComment);
    console.log(res);
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
          <span className="text-sm leading-[18px] font-sans font-semibold mb-2 pr-2 hover:cursor-pointer"><Link to={`./${post.author.username}`}>{post.author.username}</Link></span>
          <span className="text-sm leading-[18px] font-sans font-normal">{post.caption}</span>
        </p>
      </div>
      <div>
        {post.comments.map((comment, commentIndex) => (
          <div key={commentIndex}>
            <p>
              <span className="text-sm leading-[18px] font-sans font-semibold mb-2 pr-2 hover:cursor-pointer"><Link to={`./${comment.user.username}`}>{comment.user.username}</Link></span>
              <span className="text-sm leading-[18px] font-sans font-normal mb-2 pr-2">{comment.text}</span>
            </p>
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
          <span onClick={() => handleSubmitComment(post.id, comment)} className="text-xl hover:cursor-pointer hover:scale-110">💬</span>
        </div>
      </div>
      <div className="border-b border-slate-200 mt-6"></div>
    </div>
  );
}