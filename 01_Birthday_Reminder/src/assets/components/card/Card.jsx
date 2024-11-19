import { useState } from "react";
import "./card.css";
import People from "../../../data";

const Card = () => {
  const [people, setPeople] = useState(People);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <div className="card">
      <h1 className="title">5 Birthdays Today</h1>
      <div className="usersList">
        {people.map((user) => (
          <div className="userContainer" key={user.id}>
            <div className="userImg">
              <img src={user.image} alt="" />
            </div>

            <div className="userDesc">
              <h3 className="userName">{user.name}</h3>
              <p className="userAge">{user.age} years</p>
            </div>
          </div>
        ))}
      </div>
      <button className="clrBtn" onClick={handleClick}>
        Clear All
      </button>
    </div>
  );
};

export default Card;
