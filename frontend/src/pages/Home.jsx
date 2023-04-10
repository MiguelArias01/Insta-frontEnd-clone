import { createContext, useEffect, useState } from 'react';
import '../App.css';
import Header from "../components/Header/Header";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import SignIn from "../components/SignIn/SignIn";
import Footer from '../components/Profile/Footer';


const AuthenticationContext = createContext();

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const local = localStorage.getItem('TOKEN')
  const handleSignIn = () => {
    if (local) {
      setIsAuthenticated(true);
    }
  };
  useEffect(() => {
    handleSignIn();
  })

  return (
    <AuthenticationContext.Provider value={isAuthenticated}>
      {isAuthenticated ? (
        <>
          <Header />
          <Stories />
          <Posts />
          <Footer avatar={localStorage.getItem('userAvatar')}></Footer>
        </>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </AuthenticationContext.Provider>
  );
}