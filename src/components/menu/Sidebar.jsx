import React, { useState } from "react";
import { menu } from "../../data";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openSubNavIds, setOpenSubNavIds] = useState([]); // State to track open subNavs

  const toggleSubNav = (id) => {
    setOpenSubNavIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((subNavId) => subNavId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const isSubNavOpen = (id) => {
    return openSubNavIds.includes(id);
  };
  return (
    <nav className="sidebar">
      <ul className="sidebar__items">
        {menu.map((item) => (
          <li className="sidebar__item" key={item.id}>
            <Link to={item.url} className="sidebar__item-links">
              <div onClick={() => toggleSubNav(item.id)}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
                {item.subNav && (
                  <span className="sidebar__subNavIcon">
                    {isSubNavOpen(item.id) ? item.iconOpened : item.iconClosed}
                  </span>
                )}
              </div>
            </Link>
            {item.subNav && (
              <ul
                className={`sidebar__subMenu ${
                  isSubNavOpen(item.id) ? "show" : ""
                }`}
              >
                {item.subNav.map((subItem) => (
                  <li key={subItem.title} className="sidebar__subItem">
                    <Link to={subItem.url} className="sidebar__subLink">
                      <span className="sidebar__subIcon">{subItem.icon}</span>
                      <span className="sidebar__subTitle">{subItem.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
