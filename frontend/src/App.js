import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import HomeClone from './pages/HomeClone'
import Profile from './pages/Profile'
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeClone />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="new/sign-up" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App;

