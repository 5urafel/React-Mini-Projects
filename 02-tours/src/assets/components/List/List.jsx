import React, { useState } from "react";
import "./List.css";
import Card from "../Card/Card";
import tourData from "../../../data";

const List = () => {
  const [places, setPlaces] = useState(tourData);

  const handleRemove = (id) => {
    const updatedPlaces = places.filter((place) => place.id != id);
    setPlaces(updatedPlaces);
  };

  return (
    <div className="listContainer">
      {places.map((place) => (
        <Card id={place.id} place={place} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default List;
