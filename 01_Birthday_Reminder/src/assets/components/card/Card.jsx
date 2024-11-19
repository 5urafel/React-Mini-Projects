import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <h1 className="title">5 Birthdays Today</h1>
      <div className="usersList">
        <div className="userContainer">
          <img src="../../../public/hero.svg" alt="" className="userImg" />
          <div className="userDesc">
            <h3 className="userName">Surafel Destaw</h3>
            <h3 className="userAge">24 yesrs</h3>
          </div>
        </div>
      </div>
      <button className="clrBtn">Clear All</button>
    </div>
  );
};

export default Card;
