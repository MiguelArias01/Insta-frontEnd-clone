import {createContext, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Stories from "./components/Stories/Stories";
import Posts from "./components/Posts/Posts";
import SignIn from "./components/SignIn/SignIn";


const AuthenticationContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const local = localStorage.getItem('token')
  const handleSignIn = (username, password) => {
    // handle authentication logic here
    if (local) {
      setIsAuthenticated(true);
    }
  };

  return (
    <AuthenticationContext.Provider value={isAuthenticated}>
      {isAuthenticated ? (
        <>
    <Header />
    <Stories />
    <Posts />
        </>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </AuthenticationContext.Provider>
  );
}
export default App;
