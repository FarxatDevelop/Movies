import React from "react";
import Card from "./Card";
import Movies from "./data/movies";

export default function Cards() {
  return (
    <div className="cards">
      <Card data={Movies} />
    </div>
  )
};