import {createContext, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Stories from "./components/Stories/Stories";
import Posts from "./components/Posts/Posts";
import SignIn from "./components/SignIn/SignIn";


const AuthenticationContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = (username, password) => {
    // handle authentication logic here
    if (username === 'user' && password === 'password') {
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
