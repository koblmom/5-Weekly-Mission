import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CardData from "../CardData/CardData";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="Main-layout">
      <SearchBar />
      <CardData />
    </div>
  );
}

export default MainContent;
