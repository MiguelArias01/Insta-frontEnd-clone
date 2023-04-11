import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { createComment } from '../../api/mainfeed';

export default function Post({ post, onSubmit }) {
  const [comment, setComment] = useState('');
  const sound = new Audio('/assets/fart.mp3');

  const timeSignature = new Date(post.created_at);
  const now = new Date();
  const diffMs = now - timeSignature;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  async function handleSubmitComment(postId, commentText) {
    if (commentText !== "") {
      const newComment = {
        comment: commentText,
        post_id: postId,
        user_id: localStorage.getItem('id'),
      };
      await createComment(newComment);
    }
  }

  function dislike(e) {
    sound.play()
  }

  return (
    <div className=" w-3/4 my-6 relative">
      <div className="w-full flex  justify-between mb-4 relative items-center">
        <div className="relative">
          <Link to={`./${post.author.username}`}>
            <img src={post.author.profile.profile_picture ? post.author.profile.profile_picture : "https://www.dmu.edu/wp-content/uploads/bb-plugin/cache/default-profile-500x500-square.jpg"} alt="Profile" className="w-8 h-8 rounded-full inline-block mr-2 border border-slate-200 hover:cursor-pointer hover:scale-110" />
          </Link>
          <Link to={`./${post.author.username}`}>
            <span className="text-sm font-sans font-semibold inline-block relative  hover:cursor-pointer mr-2">{post.author.username}</span>
          </Link>
          <span className="inline-block text-sm font-sans font-normal relative text-[#737373] mr-2">&bull;</span>
          <span className="inline-block text-sm font-sans font-normal relative top-[1px] text-[#737373]">{diffHours === 0 ? "Just now" : diffHours < 24 ? diffHours + "h ago" : diffDays === 1 ? diffDays + " day ago" : diffDays + " days ago"}</span>
        </div>
        <div>
          <span className="hover:cursor-pointer absolute top-[1px] right-[0px]">

            <svg color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="32" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
          </span>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${post.image})`, backgroundPosition: "center", backgroundSize: "cover" }} className="pb-[100%] relative flex justify-center items-center rounded-sm mb-2">
      </div>
      <div className="w-full flex justify-between text-2xl mb-4">
        <div>
          <div className="hover:cursor-pointer hover:scale-110 active:scale-100 inline-block pr-4">💛</div>
          <div onClick={dislike} className="hover:cursor-pointer hover:scale-110 active:scale-100 inline-block pr-4">💩</div>
          <div className="hover:cursor-pointer hover:scale-110 active:scale-100 inline-block">🔗</div>
        </div>
        <div className="hover:cursor-pointer hover:scale-110 active:scale-100 inline-block">🗃️</div>
      </div>
      <div>
        <p>
          <span className="text-sm leading-[18px] font-sans font-semibold mb-2 pr-2 block">{post.liked_by.length === 1 ? post.liked_by.length + " like" : post.liked_by.length + " likes"}, {post.dislike_by.length === 1 ? post.dislike_by.length + " dislike" : post.dislike_by.length + " dislikes"}</span>
          <span className="text-sm leading-[18px] font-sans font-semibold mb-2 pr-2 hover:cursor-pointer"><Link to={`./${post.author.username}`}>{post.author.username}</Link></span>
          <span className="text-sm font-sans font-normal">{post.caption}</span>
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
          <span onClick={() => handleSubmitComment(post.id, comment)} className="text-xl hover:cursor-pointer hover:scale-110 active:scale-100">💬</span>
        </div>
      </div>
      <div className="border-b border-slate-200 mt-6"></div>
    </div>
  );
}