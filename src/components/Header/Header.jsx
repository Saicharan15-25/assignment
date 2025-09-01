import React from "react";
import "./Index.css";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { IoFlagOutline } from "react-icons/io5";
import { AiOutlineFullscreen } from "react-icons/ai";


const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="content">
          <h1>Claude</h1>
          <p className="subtitle">Content is user-generated and unverified.</p>
        </div>
        <div className="views">
          <IoEyeSharp />
          <span className="view-count">48</span>
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-button">
          <IoIosLink />
        </button>
        <button className="icon-button">
          <IoFlagOutline />
        </button>
        <button className="customize-button">Customize</button>
        <button className="icon-button">
          <AiOutlineFullscreen />
        </button>
      </div>
    </nav>
  );
};

export default Header;
