import React from "react";
import info from "../../../data";
import "./Tabs.css";
import { useState } from "react";

const Tabs = () => {
  const [displayedInfo, setDisplayedInfo] = useState(info[0]);

  const handleDisplay = (key) => {
    if (key === "") {
      setDisplayedInfo(info[0]);
    } else {
      setDisplayedInfo(info[key]);
    }
  };

  return (
    <div className="tabs-container">
      <div className="sidebar">
        {info.map((companyInfo, index) => (
          <div
            className="sidebar-row"
            key={index}
            onClick={() => handleDisplay(index)}
          >
            <div className="vertical-bar"></div>
            {companyInfo.company}
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>{displayedInfo.title}</h2>
        <div>{displayedInfo.company}</div>
      </div>
    </div>
  );
};

export default Tabs;
