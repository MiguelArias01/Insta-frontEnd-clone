import { useEffect, useState } from 'react';
import '../App.css';
import Header from "../components/Header/Header";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import SignIn from "../components/SignIn/SignIn";
import Footer from '../components/Profile/Footer';

export default function HomeClone() {
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    localStorage.getItem('TOKEN') ? setLoggedIn(true) : setLoggedIn(false)
  }, [])

  const handleSignIn = () => {
    localStorage.getItem('TOKEN') ? setLoggedIn(true) : setLoggedIn(false)
  };

  return (
    loggedIn ? (
      <>
        <Header />
        <Stories />
        <Posts />
        <Footer avatar={localStorage.getItem('userAvatar')}></Footer>
      </>
    ) : (
      <SignIn onSignIn={handleSignIn} />
    )
  );
}