import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.ibb.co/9tZHZy6/Screenshot-2023-03-31-at-16-24-05.png" alt="Instagram Logo" />
      </div>
      <div className="icons">
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="like icon" />
        <img src="https://cdn-icons-png.flaticon.com/512/1370/1370907.png" alt="messages icon" />
      </div>
    </div>
  );
}

export default Header;
