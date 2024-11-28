import React, { useState } from "react";
import "./FoodList.css";
import FoodCard from "../FoodCard/FoodCard";
import Menu from "../../../data";

const FoodList = () => {
  const [menu, setMenu] = useState(Menu);

  const handleCategory = (category) => {
    if (category === "") {
      setMenu(Menu);
    } else {
      const filteredMenu = Menu.filter(
        (menuItem) => menuItem.category.toLowerCase() === category.toLowerCase()
      );

      setMenu(filteredMenu);
    }
  };

  return (
    <div className="wrapper">
      <div className="food-list-header">
        <h2 className="list-title">Our Menu</h2>
        <hr />
        <div className="categories">
          <button className="category-btn" onClick={() => handleCategory("")}>
            All
          </button>
          <button
            className="category-btn"
            onClick={() => handleCategory("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="category-btn"
            onClick={() => handleCategory("lunch")}
          >
            Lunch
          </button>
          <button
            className="category-btn"
            onClick={() => handleCategory("shakes")}
          >
            Shakes
          </button>
        </div>
      </div>

      <div className="food-card-list">
        {menu.map((MenuItem) => (
          <FoodCard id={MenuItem.id} MenuItem={MenuItem} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
