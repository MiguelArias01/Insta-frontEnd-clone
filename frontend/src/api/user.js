import api from './apiConfig.js'

const LOCALSTORAGE_KEY = 'TOKEN'

export async function signIn(username, password) {

  const res = await api.post('api/login/', { username, password })


  // If the user exists and the password is correct, store the token in local storage and redirect the user to home.
  if (res.data.token) {
    const userAvatar = await api.get(`api/users/${username}`)
    localStorage.setItem('userAvatar', userAvatar.data.profile.profile_picture)
    localStorage.setItem(LOCALSTORAGE_KEY, res.data.token)
    localStorage.setItem('id', res.data.id)
    return { login: true, message: "Logged in." }
  }
  // If the user does not exist, send user to sign up page.
  else if (res.data.isUser) {
    return { login: false, message: "The username you entered is incorrect or does not exist. Please try again or sign up." }
  }
  // If the password is incorrect, prompt user to re-enter password.
  else if (res.data.isPassword) {
    return { login: false, message: "The password you entered is incorrect. Please try again." }
  }
}


export async function signUp(body) {
  const {username,password,email } = body
  const newBody = {
    "username": username,
    "email": password,
    "password": email
  }
  console.log(newBody)
  const res = await api.post('api/sign-up/', { newBody })

  console.log(res);
  // If username already exists, make user choose a new username.
  if (res.data.usernameExists) {
    return { login: false, message: "Username already exists. Please choose a new username." }
  }
  // If new user is created, store token in local storage and redirect user to homepage.
  localStorage.setItem(LOCALSTORAGE_KEY, res.data)
  window.location.replace("/")
}

export async function getUser() {
  const res = await api.get(`/user/:username`)
  console.log(res);
}


export async function getUserProfile(id, body) {
  const res = await api.patch(`/user/profile/${id}`, body)
  return res.data
}