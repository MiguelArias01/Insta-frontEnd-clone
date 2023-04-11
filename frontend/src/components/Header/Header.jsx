import React from "react";
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className="bg-white border-b border-slate-200 fixed top-0 inset-x-0 z-50 h-[59px]">
      <div className="w-full mx-auto px-4">
        <Link to="./">
          <img className="w-[103px] absolute top-5" src="https://res.cloudinary.com/dnld1cqvy/image/upload/v1681157937/logo_w2b8wx.png" alt="Instagram logo" />
        </Link>
        <Link to={`./${localStorage.getItem('username')}`}>
          <span className="text-3xl absolute top-3 right-4 hover:cursor-pointer">💩</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
