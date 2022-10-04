import React from "react";
import "./header.scss";
import replyLogo from "../../assets/replylogo.png";
const Header = () => {
  return (
    <div className="header_nav">
      <img src={replyLogo} />
      <div className="nav_items">
        <ul>
          <li>
            <a href="">consectetuer</a>
          </li>
          <button>Anlmeden</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
