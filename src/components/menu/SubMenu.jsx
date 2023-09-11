import React from "react";
import { Link } from "react-router-dom";
import "./subMenu.scss";

const SubMenu = ({ listItem }) => {
  return (
    <div className="subMenu">
      <div className="toggle-box">
        <span className="toggle-btn">{listItem.iconClosed}</span>
      </div>
      {listItem.subNav.map((submenu, index) => (
        <Link to={submenu.url} className="subMenu-content" key={index}>
          <span className="icon">{submenu.icon}</span>
          <span className="title">{submenu.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
