import React, { useState } from "react";
import "./Card.css";
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import reviews from "../../../data";

const Card = () => {
  const [index, setIndex] = useState(0);

  const handleDecrease = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleIncrease = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleSurprise = () => {
    const randomNumber = Math.floor(Math.random() * reviews.length);
    setIndex(randomNumber);
  };

  return (
    <div className="card-wrapper">
      <div className="imgContainer">
        <div className="quoteIcon">
          <FaQuoteRight />
        </div>
        <img src={reviews[index].image} alt="" className="profileImg" />
      </div>

      <h3>{reviews[index].name}</h3>
      <h4>{reviews[index].job}</h4>
      <p>{reviews[index].text}</p>

      <div className="swipe-icons">
        <div className="left-icon chevron-icon" onClick={handleDecrease}>
          <FaChevronLeft />
        </div>

        <div
          className="right-icon chevron-icon"
          onClick={() => handleIncrease()}
        >
          <FaChevronRight />
        </div>
      </div>
      <button onClick={handleSurprise}>surprise me</button>
    </div>
  );
};

export default Card;
