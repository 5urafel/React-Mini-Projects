import React from "react";
import "./FoodCard.css";

const FoodCard = ({ id, MenuItem }) => {
  const { title, price, img, desc } = MenuItem;
  return (
    <div className="food-card-container">
      <div className="top-section">
        <img src={img} alt="" />
      </div>
      <div className="bottom-section">
        <div className="desc-header">
          <h3 className="title">{title}</h3>
          <button className="price-btn">$ {price}</button>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FoodCard;
