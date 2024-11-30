import React, { useState } from "react";
import "./List.css";
import Card from "../Card/Card";
import tourData from "../../../data";
import { useEffect } from "react";
const url = "https://course-api.com/react-tours-project";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const handleRemove = (id) => {
    const updatedPlaces = places.filter((place) => place.id !== id);
    setPlaces(updatedPlaces);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlaces(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="listContainer">
      {places.map((place) => (
        <Card id={place.id} place={place} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default List;
