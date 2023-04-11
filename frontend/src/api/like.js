import api from './apiConfig.js'

export default async function likeOrDislike(user_id, post_id, action) {
  // console.log({ "user_id": +user_id, "post_id": post_id });
  if (action.like) {
    const res = await api.post('api/like/', { "user_id": +user_id, "post_id": post_id })
    console.log(res);
    return res.data

    // console.log({ 'user_id': user_id.userId, 'post_id': user_id.postId });
  }
  const res = await api.post('api/dislike/', { "user_id": +user_id, "post_id": post_id })
  return res.data
  // const res = await extractData(getProfile)
  // const getPosts = await api.get(`api/posts/${res.id}`);
  // getPosts.data.forEach((post) => {
  //   posts.push({ url: post.image, comments: post.comments, likes: post.liked_by, dislikes: post.dislike_by })
  // });
  // res.posts = posts
  // return res
}