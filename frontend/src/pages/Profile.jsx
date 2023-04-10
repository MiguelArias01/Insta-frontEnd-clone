import Filter from "../components/Profile/Filter"
import Footer from "../components/Profile/Footer"
import Grid from "../components/Profile/Grid"
import TopNav from "../components/Profile/TopNav"
import UserInfo from "../components/Profile/UserInfo"
import SignIn from "../components/SignIn/SignIn";

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import getUserProfile from '../api/profile.js'

export default function Profile() {

  const { username } = useParams()
  const [userInfo, setUserInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const workAround = async () => {
      const res = await getUserProfile(username)
      setUserInfo(res)
    };
    workAround();
    localStorage.getItem('TOKEN') ? setLoggedIn(true) : setLoggedIn(false)
  }, [])

  const handleSignIn = () => {
    localStorage.getItem('TOKEN') ? setLoggedIn(true) : setLoggedIn(false)
  };

  return (
    loggedIn ?
      (
        <div className="relative">
          <TopNav user={username}></TopNav>
          <UserInfo user={username} avatar={userInfo.avatar ? userInfo.avatar : "https://www.dmu.edu/wp-content/uploads/bb-plugin/cache/default-profile-500x500-square.jpg"} first={userInfo.first} last={userInfo.last} bio={userInfo.bio} posts={userInfo.posts ? userInfo.posts.length : 0}></UserInfo>
          <Filter></Filter>
          <Grid posts={userInfo.posts ? userInfo.posts : []}></Grid>
          <Footer avatar={localStorage.getItem('userAvatar')}></Footer>
        </div>
      ) :
      (
        <SignIn onSignIn={handleSignIn} />
      )

  )
}