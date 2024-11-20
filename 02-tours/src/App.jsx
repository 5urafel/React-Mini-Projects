import React from "react";
import "./App.css";
import List from "./assets/components/List/List.jsx";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Our Tours</h1>
      <hr />

      <List />
    </div>
  );
};

export default App;
