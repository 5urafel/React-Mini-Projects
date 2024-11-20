import React, { useState } from "react";
import "./Card.css";

const Card = ({ handleRemove, place, id }) => {
  const { image, name, info, price } = place;
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the text into words
  const words = info.split(" ");
  const displayedText = isExpanded
    ? info
    : words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");

  return (
    <div className="cardContainer">
      <div className="topSection">
        <img src={image} alt={name} className="tourImg" />
        <p className="badge">${price}</p>
      </div>
      <div className="bottomSection">
        <h4 className="tourTitle">{name}</h4>
        <p className="tourDesc">
          {displayedText}{" "}
          {words.length > 30 && (
            <span onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show less!" : "Read more!"}
            </span>
          )}
        </p>

        <button className="tourButton" onClick={() => handleRemove(id)}>
          Not interested!
        </button>
      </div>
    </div>
  );
};

export default Card;
