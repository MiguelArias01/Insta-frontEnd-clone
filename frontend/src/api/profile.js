import api from './apiConfig.js'

export default async function getUserProfile(username, posts = []) {
  const getProfile = await api.get(`api/users/${username}`)
  const res = await extractData(getProfile)
  const getPosts = await api.get(`api/posts/${res.id}`);
  getPosts.data.forEach((post) => {
    posts.push({ url: post.image, comments: post.comments, likes: post.liked_by, dislikes: post.dislike_by })
  });

  res.posts = posts
  return res
}

async function extractData(getProfile) {
  const userId = getProfile.data.id;
  const fName = getProfile.data.profile.firstName;
  const lName = getProfile.data.profile.lastName;
  const bio = getProfile.data.profile.bio;
  const avatar = getProfile.data.profile.profile_picture;
  return ({ id: userId, first: fName, last: lName, bio: bio, avatar: avatar })
}