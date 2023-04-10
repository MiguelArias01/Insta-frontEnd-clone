import { useState } from 'react';
import { signIn, signUp } from '../../api/user';
import {Link} from "react-router-dom";

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
    < form onSubmit={handleSubmit} className=" m-60  max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2 font-semibold">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 font-semibold">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
      </div>
      <button type="submit" className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">Sign In</button>
        <Link className="block text-center text-gray-500 font-medium mt-4" to={'new/sign-up'}>Sign Up?</Link>
    </form>
  );
}

export default SignIn;
