import React from "react";


function Header() {
  return (
    <div className="bg-white border-b border-slate-200 fixed top-0 inset-x-0 z-10 h-[59px]">
      <div className="w-full mx-auto px-4">
        <a href="#">
          <img className="w-[103px] absolute top-5" src="https://res.cloudinary.com/dnld1cqvy/image/upload/v1681157937/logo_w2b8wx.png" alt="Instagram logo" />
        </a>
        <span className="text-3xl absolute top-3 right-4">💩</span>
      </div>
    </div>
  );
}

export default Header;
