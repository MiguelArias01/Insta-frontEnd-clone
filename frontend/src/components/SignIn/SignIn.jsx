import { useState } from 'react';
import { signIn, signUp } from '../../api/user';

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
    <div className="bg-red-500 w-3/4 h-screen mx-auto flex items-center">
      <form onSubmit={handleSubmit} className="w-3/4 mx-auto bg-white rounded-lg px-8 pt-6 pb-10">
        <div className="mb-4">
          <input placeholder="Enter username." type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <input placeholder="Enter password." type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
