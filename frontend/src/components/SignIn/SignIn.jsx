import { useState } from 'react';
import { signIn, signUp } from '../../api/user';
import { Link } from "react-router-dom";

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn(username, password);
    if (res.login) {
      onSignIn(res.user);
    } else {
      onSignIn(res.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center relative">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 border max-w-[480px] border-slate-200 relative">
        <div className="w-full text-center pb-6">
          <span className="text-2xl font-sans font-bold">Login 💩</span>
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-semibold">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-semibold">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4" />
        </div>
        <div className="flex items-center justify-between">

          <button type="submit" className=" py-2 px-4 text-white bg-[#0095F6] rounded-md hover:bg-[#1877F2]">Sign In</button>
          <Link className="block text-center text-gray-500 font-semibold" to={'/new/sign-up'}>Sign Up?</Link>
        </div>
      </form>
    </div>

  );
}

export default SignIn;
