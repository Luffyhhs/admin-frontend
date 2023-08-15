import React from "react";
import "./navbar.scss";
import {
  BiFullscreen,
  BiLogoBitcoin,
  BiSearchAlt2,
  BiCategory,
  BiCog,
  BiBell,
} from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <BiLogoBitcoin />
        <span>Admin</span>
      </div>
      <div className="icons">
        <BiSearchAlt2 />
        <BiCategory />
        <BiFullscreen />
        <div className="notification">
          <BiBell />
          <span>2</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="User"
          />
          <span>User</span>
        </div>
        <BiCog />
      </div>
    </div>
  );
};

export default Navbar;
