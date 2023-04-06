import React from "react";


function Header() {
  return (
    <div className="bg-white border-b border-gray-300 fixed top-0 inset-x-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://i.ibb.co/9tZHZy6/Screenshot-2023-03-31-at-16-24-05.png"
                alt="Instagram logo"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <img
              className="h-6 w-6 mr-6"
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt="Like icon"
            />
            <img
              className="h-6 w-6"
              src="https://cdn-icons-png.flaticon.com/512/1370/1370907.png"
              alt="Messages icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
