import React, { useState } from 'react';
import likeOrDislike from '../../api/like.js'

function LikeDislikeButtons(postId, userId) {
  // console.log(postId, userId);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [like, setLike] = useState();

  const handleLikeClick = () => {
    // setLike(true);
    likeOrDislike(postId, userId, { 'like': true });
    // console.log(postId, userId, like);
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
      if (isDisliked) {
        setDislikes(dislikes - 1);
        setIsDisliked(false);
      }
    }
  };

  const handleDislikeClick = () => {
    likeOrDislike(postId, userId, { 'like': false });
    if (!isDisliked) {
      setDislikes(dislikes + 1);
      setIsDisliked(true);
      if (isLiked) {
        setLikes(likes - 1);
        setIsLiked(false);
      }
    }
  };

  return (
    <div class="buttons-container">
      {/* <p>{likes}</p> */}
      <button onClick={handleLikeClick} disabled={isLiked}>
        {isLiked ? '💛' : '💛'}
        <p>{likes}</p>
      </button>

      {/* <p>{dislikes}</p> */}
      <button onClick={handleDislikeClick} disabled={isDisliked}>
        {isDisliked ? '💩' : '💩'}
        <p>{dislikes}</p>
      </button>
    </div>
  );
}

export default LikeDislikeButtons;
