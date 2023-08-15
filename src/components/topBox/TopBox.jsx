import React from "react";
import { topTopUpUser } from "../../data";
import "./topBox.scss";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top TopUp</h1>
      <div className="list">
        {topTopUpUser.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userInfo">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.amount} MMK</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
