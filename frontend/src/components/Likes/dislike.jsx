import React, { useState } from 'react';

function DislikeButton() {
  const [dislikes, setDislikes] = useState(0);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleDislikeClick = () => {
    if (!isDisliked) {
      setDislikes(dislikes + 1);
      setIsDisliked(true);
    }
  };

  return (
    <div>
      <p>Dislikes: {dislikes}</p>
      <button onClick={handleDislikeClick} disabled={isDisliked}>
        {isDisliked ? 'Disliked' : 'Dislike'}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <DislikeButton />
    </div>
  );
}












